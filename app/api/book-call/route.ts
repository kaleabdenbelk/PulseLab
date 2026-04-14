import { neon } from '@neondatabase/serverless';
import { NextResponse } from 'next/server';

// Ensure the bookings table exists on first request (idempotent)
async function ensureTable() {
  const sql = neon(process.env.DATABASE_URL!);
  await sql`
    CREATE TABLE IF NOT EXISTS bookings (
      id         SERIAL PRIMARY KEY,
      name       TEXT NOT NULL,
      email      TEXT NOT NULL,
      phone      TEXT,
      date       TEXT NOT NULL,
      time       TEXT NOT NULL,
      company    TEXT NOT NULL,
      building   TEXT NOT NULL,
      help       TEXT,
      website    TEXT,
      stage      TEXT,
      challenge  TEXT NOT NULL,
      budget     TEXT,
      heard      TEXT,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `;
}

async function sendTelegramAlert(booking: Record<string, string>) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatIdEnv = process.env.TELEGRAM_CHAT_ID;

  console.log('[Telegram] Token present:', !!token);
  console.log('[Telegram] Chat IDs:', chatIdEnv);

  if (!token || !chatIdEnv) {
    console.warn('[Telegram] Missing token or chat ID — skipping alert');
    return;
  }

  // Support multiple recipients as a comma-separated list
  const chatIds = chatIdEnv.split(',').map(id => id.trim()).filter(Boolean);

  const message = `
🔔 *New Call Booking!*

👤 *Name:* ${booking.name}
📧 *Email:* ${booking.email}
📱 *Phone:* ${booking.phone || 'N/A'}
📅 *Date:* ${booking.date} at ${booking.time}

🏢 *Company:* ${booking.company}
🚀 *Building:* ${booking.building}
📊 *Stage:* ${booking.stage || 'N/A'}
💰 *Budget:* ${booking.budget || 'N/A'}
🆘 *Challenge:* ${booking.challenge}
🔧 *Help needed:* ${booking.help || 'N/A'}
🌐 *Website:* ${booking.website || 'N/A'}
📣 *Heard via:* ${booking.heard || 'N/A'}
  `.trim();

  // Send to all recipients in parallel
  await Promise.all(chatIds.map(async (chatId) => {
    console.log('[Telegram] Sending to chat ID:', chatId);
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: message, parse_mode: 'Markdown' }),
    });
    const data = await res.json();
    console.log(`[Telegram] ${chatId} → status: ${res.status}, ok: ${data.ok}`);
    if (!data.ok) {
      console.error(`[Telegram] ${chatId} FAILED:`, data.description);
    } else {
      console.log(`[Telegram] ✅ ${chatId} — message sent!`);
    }
  }));
}

export async function POST(req: Request) {
  try {
    const sql = neon(process.env.DATABASE_URL!);
    const body = await req.json();

    const {
      name, email, phone = '',
      date, time,
      company, building, help = '',
      website = '', stage = '',
      challenge, budget = '', heard = '',
    } = body;

    // Basic server-side validation
    if (!name || !email || !date || !time || !company || !building || !challenge) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    await ensureTable();

    await sql`
      INSERT INTO bookings
        (name, email, phone, date, time, company, building, help, website, stage, challenge, budget, heard)
      VALUES
        (${name}, ${email}, ${phone}, ${date}, ${time}, ${company}, ${building}, ${help}, ${website}, ${stage}, ${challenge}, ${budget}, ${heard})
    `;

    console.log('[book-call] DB insert successful, firing Telegram alert...');

    // Await so logs show up — wrapped so it never blocks the success response
    try {
      await sendTelegramAlert(body);
    } catch (telegramErr) {
      console.error('[Telegram] Alert threw an exception:', telegramErr);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[book-call] Error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
