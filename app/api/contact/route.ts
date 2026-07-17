import { neon } from '@neondatabase/serverless';
import { NextResponse } from 'next/server';

async function ensureTable() {
  const sql = neon(process.env.DATABASE_URL!);
  await sql`
    CREATE TABLE IF NOT EXISTS contacts (
      id         SERIAL PRIMARY KEY,
      name       TEXT NOT NULL,
      email      TEXT NOT NULL,
      company    TEXT,
      budget     TEXT,
      service    TEXT,
      timeline   TEXT,
      message    TEXT,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `;
}

async function sendTelegramAlert(contact: Record<string, string>) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatIdEnv = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatIdEnv) return;

  const chatIds = chatIdEnv.split(',').map(id => id.trim()).filter(Boolean);
  const e = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  const message = [
    '📩 <b>New Contact Form Submission!</b>',
    '',
    `👤 <b>Name:</b> ${e(contact.name)}`,
    `📧 <b>Email:</b> ${e(contact.email)}`,
    `🏢 <b>Company:</b> ${e(contact.company || 'N/A')}`,
    `💰 <b>Budget:</b> ${e(contact.budget || 'N/A')}`,
    `🛠 <b>Service:</b> ${e(contact.service || 'N/A')}`,
    `⏰ <b>Timeline:</b> ${e(contact.timeline || 'N/A')}`,
    '',
    `💬 <b>Message:</b> ${e(contact.message || 'N/A')}`,
  ].join('\n');

  await Promise.all(chatIds.map(async (chatId) => {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: message, parse_mode: 'HTML' }),
    });
    const data = await res.json();
    if (!data.ok) console.error(`[Telegram] ${chatId} FAILED:`, data.description);
  }));
}

export async function POST(req: Request) {
  try {
    const sql = neon(process.env.DATABASE_URL!);
    const body = await req.json();

    const { name, email, company = '', budget = '', service = '', timeline = '', message = '', 'bot-field': honeypot } = body;

    if (honeypot) {
      return NextResponse.json({ success: true });
    }

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
    }

    await ensureTable();

    await sql`
      INSERT INTO contacts (name, email, company, budget, service, timeline, message)
      VALUES (${name}, ${email}, ${company}, ${budget}, ${service}, ${timeline}, ${message})
    `;

    try {
      await sendTelegramAlert(body);
    } catch (telegramErr) {
      console.error('[Telegram] Alert threw an exception:', telegramErr);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[contact] Error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
