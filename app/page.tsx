export default function Home() {
  const year = new Date().getFullYear();
  return (
    <div className="font-sans min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur border-b border-black/10 dark:border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-xl font-semibold tracking-tight">Geeksman</a>
          <nav className="hidden sm:flex gap-6 text-sm">
            <a href="#services" className="hover:underline underline-offset-4">Services</a>
            <a href="#portfolio" className="hover:underline underline-offset-4">Portfolio</a>
            <a href="#about" className="hover:underline underline-offset-4">About</a>
            <a href="#contact" className="hover:underline underline-offset-4">Contact</a>
          </nav>
          <a href="#contact" className="sm:hidden inline-flex items-center rounded-md border px-3 py-1.5 text-sm">Contact</a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">Building reliable software that grows your business.</h1>
            <p className="mt-4 text-base sm:text-lg text-black/70 dark:text-white/70">Geeksman is a software services studio specializing in custom web & mobile apps, cloud-native solutions, and delightful user experiences. We ship fast, maintain quality, and scale with you.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-foreground text-background px-5 py-3 text-sm font-medium hover:opacity-90">Get a free consultation</a>
              <a href="#portfolio" className="inline-flex items-center justify-center rounded-md border border-black/10 dark:border-white/15 px-5 py-3 text-sm font-medium hover:bg-black/[.04] dark:hover:bg-white/[.06]">View our work</a>
            </div>
            <div className="mt-6 flex gap-6 opacity-80 text-sm">
              <span>Web • Mobile • Cloud • UI/UX • AI Integrations</span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="aspect-video rounded-xl border border-black/10 dark:border-white/15 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Services</h2>
        <p className="mt-2 text-black/70 dark:text-white/70">Full-cycle software development tailored to your goals.</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Custom Software", desc: "Bespoke web platforms and internal tools built for your workflows." },
            { title: "Mobile Apps", desc: "iOS & Android apps with modern stacks and native performance." },
            { title: "Cloud & DevOps", desc: "Scalable, secure infrastructure, CI/CD, and cost optimization." },
            { title: "UI/UX Design", desc: "User-centered design systems and prototypes that convert." },
            { title: "Product Modernization", desc: "Migrate monoliths, refactor legacy, improve reliability." },
            { title: "Maintenance & Support", desc: "SLA-backed support, monitoring, and continuous improvements." },
          ].map((s) => (
            <div key={s.title} className="rounded-lg border border-black/10 dark:border-white/15 p-5 hover:shadow-sm transition">
              <h3 className="font-medium text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-black/70 dark:text-white/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Selected Work</h2>
        <p className="mt-2 text-black/70 dark:text-white/70">A glimpse into products we recently delivered.</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "SaaS Analytics Dashboard", stack: "Next.js, Node, PostgreSQL", color: "from-emerald-500/20 to-emerald-700/20" },
            { name: "E-commerce Mobile App", stack: "Flutter, Firebase", color: "from-indigo-500/20 to-indigo-700/20" },
            { name: "Workflow Automation", stack: "React, Python, AWS", color: "from-rose-500/20 to-rose-700/20" },
          ].map((p) => (
            <div key={p.name} className="group rounded-lg overflow-hidden border border-black/10 dark:border-white/15">
              <div className={`h-40 bg-gradient-to-br ${p.color}`} />
              <div className="p-4">
                <h3 className="font-medium">{p.name}</h3>
                <p className="text-sm mt-1 text-black/70 dark:text-white/70">{p.stack}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Why Geeksman?</h2>
            <p className="mt-3 text-black/70 dark:text-white/70">We combine product thinking with engineering excellence to deliver business outcomes, not just code.</p>
            <ul className="mt-4 space-y-2 text-sm list-disc pl-5 text-black/80 dark:text-white/80">
              <li>Senior team with experience across startups and enterprises.</li>
              <li>Transparent delivery with weekly demos and metrics.</li>
              <li>Quality by default: testing, performance, security.</li>
              <li>Flexible engagement: fixed-scope, T&M, or dedicated squads.</li>
            </ul>
          </div>
          <div className="rounded-lg border border-black/10 dark:border-white/15 p-5">
            <h3 className="font-medium">Tech We Love</h3>
            <p className="mt-2 text-sm text-black/70 dark:text-white/70">TypeScript, Next.js, React Native, Node.js, Python, Go, PostgreSQL, Prisma, Redis, Docker, AWS, GCP, Tailwind CSS, and more.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <div className="rounded-xl border border-black/10 dark:border-white/15 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Ready to build?</h2>
            <p className="mt-2 text-black/70 dark:text-white/70">Tell us about your project and we’ll get back within 1 business day.</p>
            <div className="mt-3 text-sm">
              <p>Email: <a href="mailto:hello@geeksman.dev" className="underline underline-offset-4">hello@geeksman.dev</a></p>
              <p>Phone: <a href="tel:+10000000000" className="underline underline-offset-4">+1 (000) 000-0000</a></p>
              <p>Location: Remote • Global</p>
            </div>
          </div>
          <div className="flex gap-3">
            <a href="mailto:hello@geeksman.dev" className="inline-flex items-center justify-center rounded-md bg-foreground text-background px-5 py-3 text-sm font-medium hover:opacity-90">Start a conversation</a>
            <a href="#services" className="inline-flex items-center justify-center rounded-md border border-black/10 dark:border-white/15 px-5 py-3 text-sm font-medium hover:bg-black/[.04] dark:hover:bg-white/[.06]">See services</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/10 dark:border-white/10 py-8 mt-8">
        <div className="mx-auto max-w-6xl px-6 text-sm flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {year} Geeksman. All rights reserved.</p>
          <div className="flex gap-4 opacity-80">
            <a href="#" className="hover:underline underline-offset-4">Privacy</a>
            <a href="#" className="hover:underline underline-offset-4">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
