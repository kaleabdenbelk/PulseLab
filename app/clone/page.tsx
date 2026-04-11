import type { Metadata } from "next";
import type { ComponentType } from "react";
import {
  ArrowRight,
  BookOpen,
  Check,
  Cpu,
  HardDrive,
  MapPinned,
  Menu,
  MonitorPlay,
  Server,
  ShieldCheck,
  Sparkles,
  WifiOff,
} from "lucide-react";

const featureCards = [
  {
    icon: BookOpen,
    title: "Offline knowledge",
    description:
      "Browse Wikipedia, reference material, repair guides, and local archives even when the network disappears.",
  },
  {
    icon: Cpu,
    title: "Local AI",
    description:
      "Run models on your own hardware so writing, research, and analysis stay fast and private.",
  },
  {
    icon: MapPinned,
    title: "Offline maps",
    description:
      "Use detailed map data for planning, navigation, and exploration without depending on cell service.",
  },
  {
    icon: MonitorPlay,
    title: "Education pack",
    description:
      "Deliver learning resources and offline curriculum for homes, cabins, classrooms, and disaster prep.",
  },
];

const audienceCards = [
  {
    title: "Emergency prep",
    description:
      "Keep reference material, maps, and learning tools available when the internet or power grid fails.",
  },
  {
    title: "Off-grid life",
    description:
      "Build a complete local library for cabins, vans, boats, and remote homes.",
  },
  {
    title: "Technically curious teams",
    description:
      "Own your data, run local models, and customize the stack the way you want.",
  },
  {
    title: "Families and schools",
    description:
      "Turn one machine into a resilient learning hub with lessons, references, and AI support.",
  },
];

const insideCards = [
  {
    title: "Information library",
    label: "Powered by Kiwix",
    description:
      "Offline Wikipedia, project archives, repair manuals, and curated collections delivered from one local server.",
    image:
      "https://www.projectnomad.us/_next/image?url=%2Fscreenshots%2Fcontent-explorer.png&w=3840&q=75&dpl=dpl_2PXonbdP5mjJeVqkSL9uEYRwPj6G",
  },
  {
    title: "AI assistant",
    label: "Powered by Ollama",
    description:
      "A local chat interface for writing, coding, planning, and analysis without sending prompts to the cloud.",
    image:
      "https://www.projectnomad.us/_next/image?url=%2Fscreenshots%2Fai-chat.png&w=3840&q=75&dpl=dpl_2PXonbdP5mjJeVqkSL9uEYRwPj6G",
  },
  {
    title: "Offline maps",
    label: "Powered by OpenStreetMap",
    description:
      "Detailed map tiles and route planning that keep working when connectivity does not.",
    image:
      "https://www.projectnomad.us/_next/image?url=%2Fscreenshots%2Fmaps.png&w=3840&q=75&dpl=dpl_2PXonbdP5mjJeVqkSL9uEYRwPj6G",
  },
  {
    title: "Education platform",
    label: "Powered by Kolibri",
    description:
      "A self-contained learning environment with lessons, videos, and curriculum that runs locally.",
    image:
      "https://www.projectnomad.us/_next/image?url=%2Fscreenshots%2Feasy-setup-step1.png&w=3840&q=75&dpl=dpl_2PXonbdP5mjJeVqkSL9uEYRwPj6G",
  },
];

const comparisonRows = [
  ["Price", "Free", "$199-$279", "$499-$699"],
  ["AI capability", "GPU-accelerated local models", "None", "Basic 7B model"],
  ["Hardware", "Any PC you choose", "Raspberry Pi locked", "Raspberry Pi locked"],
  ["Content library", "Full Wikipedia + curated packs", "Full Wikipedia + curated content", "Limited"],
  ["Offline maps", "OpenStreetMap regions", "OpenStreetMap via IIAB", "Basic"],
  ["Education", "Full offline learning stack", "Khan Academy", "None"],
  ["Open source", "Yes", "Partially", "No"],
  ["Upgradeable", "Yes", "Yes", "No"],
];

export const metadata: Metadata = {
  title: "Project NOMAD Clone",
  description: "A visual clone of the Project NOMAD landing page in the /clone route.",
};

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.38em] text-[#78f089]">{eyebrow}</p>
      <h2 className="mt-4 font-[family-name:var(--font-koho)] text-4xl leading-tight text-white sm:text-5xl">
        {title}
      </h2>
      <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">{description}</p>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, description }: { icon: ComponentType<{ className?: string }>; title: string; description: string }) {
  return (
    <article className="group rounded-[28px] border border-white/10 bg-white/5 p-7 shadow-[0_20px_60px_rgba(0,0,0,0.22)] transition-transform duration-300 hover:-translate-y-1 hover:border-[#78f089]/40 hover:bg-white/[0.07]">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#78f089]/12 text-[#78f089] ring-1 ring-[#78f089]/20">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-5 font-[family-name:var(--font-koho)] text-2xl text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-[15px]">{description}</p>
    </article>
  );
}

export default function ClonePage() {
  return (
    <main className="min-h-screen bg-[#091620] text-white" style={{ fontFamily: "var(--font-poppins)" }}>
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,_rgba(120,240,137,0.16),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(62,118,255,0.16),_transparent_30%),linear-gradient(180deg,_#08131d_0%,_#0a1824_48%,_#091620_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:70px_70px] opacity-20 [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />

        <header className="sticky top-0 z-30 border-b border-white/[0.08] bg-[#091620]/80 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8 lg:px-10">
            <a href="#top" className="flex items-center gap-3 text-white">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#78f089] text-[#0a1824] shadow-[0_10px_30px_rgba(120,240,137,0.32)]">
                <WifiOff className="h-6 w-6" />
              </div>
              <div>
                <p className="font-[family-name:var(--font-koho)] text-2xl font-bold leading-none">Project</p>
                <p className="font-[family-name:var(--font-koho)] text-2xl font-bold leading-none text-[#78f089]">NOMAD</p>
              </div>
            </a>

            <nav className="hidden items-center gap-7 text-sm font-medium text-slate-300 lg:flex">
              <a href="#features" className="transition hover:text-white">Features</a>
              <a href="#use-cases" className="transition hover:text-white">Use Cases</a>
              <a href="#hardware" className="transition hover:text-white">Hardware</a>
              <a href="#install" className="transition hover:text-white">Install</a>
              <a href="#community" className="transition hover:text-white">Community</a>
            </nav>

            <div className="hidden items-center gap-3 sm:flex">
              <a href="#support" className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5">
                Support the Project
              </a>
              <a href="https://github.com/Crosstalk-Solutions/project-nomad" className="inline-flex items-center gap-2 rounded-full bg-[#78f089] px-5 py-2.5 text-sm font-semibold text-[#091620] transition hover:bg-[#8bf49a]">
                Get NOMAD Free <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <button className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white lg:hidden">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </header>

        <section id="top" className="mx-auto max-w-7xl px-5 pb-16 pt-16 sm:px-8 lg:px-10 lg:pb-24 lg:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#78f089]/25 bg-[#78f089]/[0.08] px-4 py-2 text-sm font-semibold text-[#9af5a8]">
                <Sparkles className="h-4 w-4" />
                100% free and open source
              </div>
              <h1 className="mt-6 max-w-3xl font-[family-name:var(--font-koho)] text-5xl leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                Knowledge that never goes offline.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                Offline Wikipedia, local AI, maps, and education tools running on your own hardware so your stack keeps working when the internet does not.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a href="https://github.com/Crosstalk-Solutions/project-nomad" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#78f089] px-6 py-3.5 text-base font-semibold text-[#091620] transition hover:bg-[#8cf49b]">
                  Get Project NOMAD Free <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#features" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/[0.18] px-6 py-3.5 text-base font-semibold text-white transition hover:bg-white/5">
                  See what is inside
                </a>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {[
                  ["Free", "No subscriptions or lock-in"],
                  ["Offline", "Works without internet"],
                  ["Private", "Your data stays local"],
                ].map(([title, description]) => (
                  <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                    <p className="text-sm font-semibold text-[#9af5a8]">{title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-8 top-10 h-32 w-32 rounded-full bg-[#78f089]/20 blur-3xl" />
              <div className="absolute -right-8 bottom-16 h-40 w-40 rounded-full bg-sky-500/20 blur-3xl" />
              <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[#0d2436]/95 p-4 shadow-[0_30px_100px_rgba(0,0,0,0.35)]">
                <div className="rounded-[28px] border border-white/10 bg-[#0f273b] p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-[#9af5a8]">NOMAD Command Center</p>
                      <p className="mt-1 text-xs text-slate-400">Offline knowledge, AI, maps, and education in one box</p>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#78f089]" />
                      Connected to local server
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
                    <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,#14334a_0%,#0f2537_100%)] p-5">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-slate-200">System status</p>
                        <span className="rounded-full bg-[#78f089]/10 px-3 py-1 text-xs font-semibold text-[#9af5a8]">Online locally</span>
                      </div>
                      <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                        {[
                          ["Knowledge base", "14.2 TB cached"],
                          ["AI models", "3 local models active"],
                          ["Maps", "5 regions ready"],
                          ["Learning", "K-12 content loaded"],
                        ].map(([label, value]) => (
                          <div key={label} className="rounded-2xl border border-white/[0.08] bg-white/5 p-4">
                            <p className="text-xs uppercase tracking-[0.22em] text-slate-400">{label}</p>
                            <p className="mt-2 font-semibold text-white">{value}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[28px] border border-[#78f089]/15 bg-[#091520] p-5">
                      <div className="flex items-center gap-3 text-[#9af5a8]">
                        <ShieldCheck className="h-5 w-5" />
                        <p className="text-sm font-semibold uppercase tracking-[0.22em]">Always on</p>
                      </div>
                      <p className="mt-4 text-xl font-semibold leading-snug text-white">
                        Your library, tools, and AI assistant stay available even when the network drops.
                      </p>
                      <div className="mt-6 space-y-3 text-sm text-slate-300">
                        {[
                          "Local-only data handling",
                          "Runs on a computer you already own",
                          "Open source and upgradeable",
                        ].map((item) => (
                          <div key={item} className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-[#78f089]" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-4 md:grid-cols-3">
                    <img
                      src="https://www.projectnomad.us/_next/image?url=%2Fscreenshots%2Fdashboard.png&w=3840&q=75&dpl=dpl_2PXonbdP5mjJeVqkSL9uEYRwPj6G"
                      alt="NOMAD dashboard"
                      className="h-36 w-full rounded-[24px] object-cover"
                    />
                    <img
                      src="https://www.projectnomad.us/_next/image?url=%2Fscreenshots%2Fbenchmark.png&w=3840&q=75&dpl=dpl_2PXonbdP5mjJeVqkSL9uEYRwPj6G"
                      alt="NOMAD benchmark"
                      className="h-36 w-full rounded-[24px] object-cover"
                    />
                    <img
                      src="https://www.projectnomad.us/_next/image?url=%2Fscreenshots%2Fai-chat.png&w=3840&q=75&dpl=dpl_2PXonbdP5mjJeVqkSL9uEYRwPj6G"
                      alt="NOMAD AI chat"
                      className="h-36 w-full rounded-[24px] object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <SectionHeading
            eyebrow="What is inside"
            title="One local server for knowledge, AI, maps, and education."
            description="Project NOMAD bundles open tools into a single offline experience so the important parts of your digital life keep working everywhere."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {featureCards.map((card) => (
              <FeatureCard key={card.title} {...card} />
            ))}
          </div>
        </section>

        <section id="use-cases" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <SectionHeading
            eyebrow="Built for those who prepare"
            title="Useful when the world is normal and essential when it is not."
            description="The same stack works for emergency planning, remote living, classrooms, and technical hobbyists who want more control."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {audienceCards.map((card) => (
              <article key={card.title} className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                <h3 className="font-[family-name:var(--font-koho)] text-2xl text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{card.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <SectionHeading
            eyebrow="See it in action"
            title="A single interface for browsing, chatting, mapping, and learning."
            description="The system feels like a practical command center rather than a pile of separate apps."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {insideCards.map((card) => (
              <article key={card.title} className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5">
                <img src={card.image} alt={card.title} className="h-64 w-full object-cover" />
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9af5a8]">{card.label}</p>
                  <h3 className="mt-3 font-[family-name:var(--font-koho)] text-3xl text-white">{card.title}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300">{card.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <SectionHeading
            eyebrow="Why NOMAD"
            title="A better answer than locked-down offline boxes."
            description="Compared with prebuilt alternatives, NOMAD emphasizes hardware freedom, stronger AI, and a fully open stack."
          />

          <div className="mt-12 overflow-hidden rounded-[32px] border border-white/10 bg-[#0c1d2b]">
            <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] border-b border-white/10 bg-white/5 px-6 py-4 text-xs font-semibold uppercase tracking-[0.26em] text-slate-300 sm:px-8">
              <div>Capability</div>
              <div className="text-center">Project NOMAD</div>
              <div className="text-center">Prepper Disk</div>
              <div className="text-center">R.E.A.D.I.</div>
            </div>
            <div className="divide-y divide-white/[0.08]">
              {comparisonRows.map(([label, nomad, prepperDisk, readi]) => (
                <div key={label} className="grid grid-cols-[1.4fr_1fr_1fr_1fr] px-6 py-5 sm:px-8">
                  <div className="pr-4 text-sm font-medium text-white sm:text-base">{label}</div>
                  <div className="text-center text-sm text-[#9af5a8] sm:text-base">{nomad}</div>
                  <div className="text-center text-sm text-slate-300 sm:text-base">{prepperDisk}</div>
                  <div className="text-center text-sm text-slate-300 sm:text-base">{readi}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="hardware" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.38em] text-[#78f089]">Built for robust hardware</p>
              <h2 className="mt-4 font-[family-name:var(--font-koho)] text-4xl leading-tight text-white sm:text-5xl">NOMAD is happiest on serious machines.</h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                The point is not tiny hardware at any cost. It is giving you enough memory, storage, and GPU headroom to run useful local models and keep the whole offline stack responsive.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  ["CPU", "AMD Ryzen 7 / Intel i7+"],
                  ["Memory", "32 GB RAM"],
                  ["Graphics", "Integrated Radeon 780M+ or NVIDIA GPU"],
                  ["Storage", "1 TB SSD"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-400">{label}</p>
                    <p className="mt-2 text-lg font-semibold text-white">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[34px] border border-white/10 bg-white/5 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.3)]">
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Power", value: "GPU-ready" },
                  { label: "AI", value: "Local models" },
                  { label: "Flexibility", value: "Any PC" },
                ].map((item) => (
                  <div key={item.label} className="rounded-[24px] border border-white/10 bg-[#0c1d2b] p-5 text-center">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-400">{item.label}</p>
                    <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 overflow-hidden rounded-[28px] border border-white/10 bg-[#08131d] p-5">
                <div className="flex items-center gap-3 text-[#9af5a8]">
                  <Server className="h-5 w-5" />
                  <p className="text-sm font-semibold uppercase tracking-[0.26em]">Benchmark-ready</p>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Community systems range from refurbished desktops to GPU rigs scoring anywhere from basic utility to serious local inference performance.
                </p>
                <img
                  src="https://www.projectnomad.us/_next/image?url=%2Fscreenshots%2Fbenchmark.png&w=3840&q=75&dpl=dpl_2PXonbdP5mjJeVqkSL9uEYRwPj6G"
                  alt="NOMAD benchmark"
                  className="mt-5 h-56 w-full rounded-[24px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="install" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <SectionHeading
            eyebrow="Install in 60 seconds"
            title="A two-command install on Ubuntu or Debian."
            description="The setup script takes over from there and installs Docker if the machine needs it."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[32px] border border-white/10 bg-[#07131d] p-6">
              <div className="flex items-center gap-3 text-[#9af5a8]">
                <HardDrive className="h-5 w-5" />
                <p className="text-sm font-semibold uppercase tracking-[0.26em]">Quick install</p>
              </div>
              <div className="mt-5 rounded-[28px] border border-white/10 bg-black/30 p-5 font-mono text-sm leading-7 text-slate-200">
                <p>$ curl -fsSL https://raw.githubusercontent.com/Crosstalk-Solutions/project-nomad/main/install/install_nomad.sh -o install_nomad.sh</p>
                <p className="mt-2">$ sudo bash install_nomad.sh</p>
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-300">
                Requires Ubuntu 22.04+ or Debian 12+. Windows support is available through Docker Desktop for development workflows.
              </p>
            </div>

            <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5">
              <img
                src="https://www.projectnomad.us/_next/image?url=%2Fscreenshots%2Feasy-setup-step1.png&w=3840&q=75&dpl=dpl_2PXonbdP5mjJeVqkSL9uEYRwPj6G"
                alt="Easy setup wizard"
                className="h-72 w-full object-cover"
              />
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#9af5a8]">Simple onboarding</p>
                <h3 className="mt-3 font-[family-name:var(--font-koho)] text-3xl text-white">Choose the tools you want, then let it configure itself.</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  The goal is less setup friction and more time with a working local system.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="community" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-6 rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(120,240,137,0.14),rgba(9,22,32,0.92))] p-8 lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.38em] text-[#78f089]">Ready to go offline?</p>
              <h2 className="mt-4 font-[family-name:var(--font-koho)] text-4xl leading-tight text-white sm:text-5xl">A full local stack without subscriptions, paywalls, or hardware lock-in.</h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
                NOMAD is funded by the community that uses it, so the software stays open, modifiable, and usable on hardware that makes sense for the job.
              </p>

              <div id="support" className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="https://github.com/Crosstalk-Solutions/project-nomad" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#78f089] px-6 py-3.5 text-base font-semibold text-[#091620] transition hover:bg-[#8cf49b]">
                  Get the source <ArrowRight className="h-4 w-4" />
                </a>
                <a href="https://www.projectnomad.us/support" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-white/[0.06]">
                  Support the project
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Community", "GitHub, Discord, volunteer links, and live documentation."],
                ["Project", "Hardware, install, benchmark, roadmap, and press pages."],
                ["Open source", "Apache 2.0 with room to adapt the stack to your needs."],
                ["Funded", "Small, transparent community support instead of subscriptions."],
              ].map(([title, description]) => (
                <div key={title} className="rounded-[24px] border border-white/10 bg-black/15 p-5">
                  <p className="text-sm font-semibold text-white">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 bg-[#07121b]">
          <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#78f089] text-[#091620]">
                    <WifiOff className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-koho)] text-2xl font-bold leading-none text-white">Project NOMAD</p>
                    <p className="mt-1 text-sm text-slate-400">Knowledge that never goes offline.</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-slate-300">
                <a href="https://github.com/Crosstalk-Solutions/project-nomad" className="transition hover:text-white">GitHub</a>
                <a href="https://www.projectnomad.us/hardware" className="transition hover:text-white">Hardware</a>
                <a href="https://www.projectnomad.us/install" className="transition hover:text-white">Install</a>
                <a href="https://www.projectnomad.us/press" className="transition hover:text-white">Press</a>
                <a href="https://www.projectnomad.us/contact" className="transition hover:text-white">Contact</a>
              </div>
            </div>
            <p className="mt-8 text-sm text-slate-500">This /clone route is a visual recreation of the Project NOMAD landing page for local development and study.</p>
          </div>
        </footer>
      </div>
    </main>
  );
}