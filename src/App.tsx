import { useEffect, useState } from "react";
import BeforeAfterSlider from "./components/BeforeAfterSlider";
import {
  cases,
  clinic,
  doctor,
  faqs,
  gallery,
  scarTypes,
  steps,
  technologies,
  testimonials,
} from "./data";

/* ---------------- shared bits ---------------- */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-forest-600">
      <span className="h-px w-6 bg-forest-600/50" />
      {children}
    </span>
  );
}

function Btn({
  children,
  href = "#book",
  variant = "solid",
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  variant?: "solid" | "ghost";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300";
  const styles =
    variant === "solid"
      ? "bg-forest-800 text-mint-50 hover:bg-forest-900 shadow-lg shadow-forest-800/20 hover:shadow-xl hover:-translate-y-0.5"
      : "border border-forest-800/25 text-forest-800 hover:bg-forest-800 hover:text-mint-50";
  return (
    <a href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </a>
  );
}

function ContactItem({
  label,
  value,
  icon,
}: {
  label: string;
  value: React.ReactNode;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 rounded-2xl border border-forest-800/10 bg-mint-50/70 p-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-forest-800/8 text-forest-700">
        {icon}
      </div>
      <div>
        <div className="text-[11px] uppercase tracking-[0.2em] text-forest-600">{label}</div>
        <div className="mt-1 text-base leading-snug text-forest-900">{value}</div>
      </div>
    </div>
  );
}

function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`px-5 py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

/* ---------------- nav ---------------- */

const links = [
  ["Scar Types", "#types"],
  ["Technology", "#technology"],
  ["Results", "#results"],
  ["Gallery", "#gallery"],
  ["Your Doctor", "#doctor"],
  ["FAQ", "#faq"],
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-mint-50/85 backdrop-blur-xl shadow-[0_1px_0_rgba(20,58,37,.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="flex items-center gap-2.5">
          <img
            src="/images/logo.jpeg"
            alt={`${clinic.name} logo`}
            className="h-10  object-cover shadow-sm ring-1 ring-forest-800/10"
          />
        
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-forest-800/75 transition hover:text-forest-900"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Btn className="hidden sm:inline-flex !px-5 !py-2.5">Book Consult</Btn>
          <button
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-forest-800/20 text-forest-800 lg:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-forest-800/10 bg-mint-50/95 px-5 py-4 backdrop-blur-xl lg:hidden">
          <div className="grid gap-1">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-forest-800 hover:bg-mint-200"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------- hero ---------------- */

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="pointer-events-none absolute -top-32 -left-40 h-[28rem] w-[28rem] rounded-full bg-mint-300/50 blur-3xl" />
      <div className="pointer-events-none absolute top-24 -right-32 h-[24rem] w-[24rem] rounded-full bg-mint-200/70 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.05fr_.95fr]">
        <div className="animate-fade-up">
          <Eyebrow>Acne Scar Revision · Delhi NCR</Eyebrow>
          <h1 className="mt-5 font-display text-4xl leading-[1.05] tracking-tight text-forest-900 sm:text-5xl md:text-6xl">
            Your acne is gone.
            <br />
            <span className="italic text-forest-600">Let's clear what it left behind.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-forest-800/75 md:text-lg">
            Icepick, boxcar, rolling scars and post-acne pigmentation each need a
            different tool. We map every scar on your face, then combine
            subcision, TCA CROSS, the <strong className="font-semibold text-forest-900">VirtuEx 1550&nbsp;nm fractional laser</strong> and{" "}
            <strong className="font-semibold text-forest-900">QLARA Q-switched toning</strong> into one written protocol.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Btn>Book a scar-mapping consult →</Btn>
            <Btn href="#results" variant="ghost">
              See real results
            </Btn>
          </div>

          <div className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-forest-800/10 pt-6">
            {[
              ["15+", "Years of practice"],
              ["4.9/5", "Google rating"],
              ["2", "Dedicated laser platforms"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-2xl font-semibold text-forest-900 md:text-3xl">{n}</div>
                <div className="mt-1 text-xs leading-snug text-forest-800/60">{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-fade-up [animation-delay:150ms]">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-mint-200/60 blur-xl" />
          <img
            src="/images/hero.jpg"
            alt="Clear, smooth skin after acne scar treatment"
            className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-2xl shadow-forest-900/15"
          />
          <div className="animate-floaty absolute -bottom-6 -left-4 max-w-[15rem] rounded-2xl border border-mint-200 bg-white/95 p-4 shadow-xl backdrop-blur md:-left-10">
            <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-forest-600">
              Typical outcome
            </div>
            <div className="mt-1 font-display text-3xl font-semibold text-forest-900">60–85%</div>
            <p className="mt-1 text-xs leading-snug text-forest-800/65">
              measurable improvement in scar depth over a full protocol.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- marquee strip ---------------- */

function Strip() {
  const items = [
    "Subcision",
    "TCA CROSS",
    "VirtuEx 1550 nm Fractional",
    "QLARA Q-Switched",
    "Microneedling RF",
    "Chemical Peels",
    "Dermatologist-led",
  ];
  return (
    <div className="border-y border-forest-800/10 bg-mint-100">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 py-5">
        {items.map((i) => (
          <span key={i} className="text-xs font-semibold uppercase tracking-[0.16em] text-forest-700/70">
            {i}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------------- scar types ---------------- */

function ScarTypes() {
  return (
    <Section id="types">
      <div className="max-w-2xl">
        <Eyebrow>Know your scar</Eyebrow>
        <h2 className="mt-4 font-display text-3xl leading-tight text-forest-900 md:text-5xl">
          Six different scars. Six different answers.
        </h2>
        <p className="mt-4 text-forest-800/70">
          The single biggest reason acne scar treatment fails is treating every
          scar with the same device. Here's what we look for during your mapping
          consult.
        </p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {scarTypes.map((s, i) => (
          <article
            key={s.key}
            className="group relative overflow-hidden rounded-2xl border border-mint-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-mint-400 hover:shadow-xl hover:shadow-forest-900/5"
          >
            <div className="flex items-start justify-between">
              <span className="font-display text-4xl font-semibold text-mint-300 transition group-hover:text-mint-400">
                0{i + 1}
              </span>
              <span className="rounded-full bg-mint-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-forest-700">
                {s.key}
              </span>
            </div>
            <h3 className="mt-4 font-display text-xl text-forest-900">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-forest-800/70">{s.desc}</p>
            <div className="mt-5 border-t border-mint-200 pt-4">
              <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-forest-600">
                Our protocol
              </div>
              <div className="mt-1 text-sm font-medium text-forest-800">{s.protocol}</div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- technology ---------------- */

function Technology() {
  const [active, setActive] = useState(0);
  const t = technologies[active];

  return (
    <Section id="technology" className="bg-forest-900 text-mint-100">
      <div className="max-w-2xl">
        <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-mint-400">
          <span className="h-px w-6 bg-mint-400/60" />
          The technology
        </span>
        <h2 className="mt-4 font-display text-3xl leading-tight text-mint-50 md:text-5xl">
          Two platforms, used together.
        </h2>
        <p className="mt-4 text-mint-200/70">
          Acne scarring is a texture problem <em>and</em> a pigment problem. We
          run both on dedicated, dermatologist-operated systems.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        {technologies.map((tech, i) => (
          <button
            key={tech.id}
            onClick={() => setActive(i)}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
              active === i
                ? "bg-mint-100 text-forest-900 shadow-lg"
                : "border border-mint-100/25 text-mint-200/80 hover:border-mint-100/60 hover:text-mint-50"
            }`}
          >
            {tech.name}
          </button>
        ))}
      </div>

      <div key={t.id} className="animate-fade-up mt-8 grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
        <div className="rounded-3xl border border-mint-100/12 bg-mint-100/[0.06] p-7 md:p-9">
          <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.16em] text-mint-400">
            <span className="rounded-full bg-mint-400/15 px-3 py-1">{t.category}</span>
            <span className="text-mint-200/50 normal-case tracking-normal">{t.partner}</span>
          </div>
          <h3 className="mt-4 font-display text-3xl text-mint-50 md:text-4xl">{t.name}</h3>
          <p className="mt-1 text-sm font-medium text-mint-400">{t.headline}</p>
          <p className="mt-5 leading-relaxed text-mint-200/80">{t.summary}</p>
          <p className="mt-4 leading-relaxed text-mint-200/65">{t.detail}</p>

          <div className="mt-7 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {t.spec.map(([k, v]) => (
              <div key={k} className="border-t border-mint-100/12 pt-3">
                <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-mint-400/80">{k}</div>
                <div className="mt-1 text-sm text-mint-100">{v}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {t.areas.map((a) => (
              <span
                key={a}
                className="rounded-full border border-mint-100/20 px-3 py-1.5 text-xs text-mint-200/80"
              >
                {a}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <img
            src={t.image}
            alt={t.name}
            className="h-64 w-full rounded-3xl object-cover md:h-72"
          />
          <div className="rounded-3xl border border-mint-100/12 bg-mint-100/[0.06] p-7">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-mint-400">
              Key benefits
            </div>
            <ul className="mt-4 space-y-2.5">
              {t.benefits.map((b) => (
                <li key={b} className="flex gap-3 text-sm text-mint-200/85">
                  <svg className="mt-0.5 shrink-0 text-mint-400" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- before & after ---------------- */

function Results() {
  return (
    <Section id="results" className="bg-mint-100">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-2xl">
          <Eyebrow>Before &amp; after</Eyebrow>
          <h2 className="mt-4 font-display text-3xl leading-tight text-forest-900 md:text-5xl">
            Drag the handle. Judge for yourself.
          </h2>
          <p className="mt-4 text-forest-800/70">
            Standardised lighting, same angle, same distance — no filters, no
            flattering angles. Individual results vary with scar depth, skin type
            and adherence to aftercare.
          </p>
        </div>
        <Btn href="#book" variant="ghost">
          Ask about your case
        </Btn>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        {cases.map((c) => (
          <figure key={c.id} className="rounded-3xl border border-mint-200 bg-white p-4 shadow-sm">
            <BeforeAfterSlider
              before={c.before}
              after={c.after}
              className="aspect-square w-full cursor-ew-resize"
            />
            <figcaption className="px-2 pt-5 pb-2">
              <h3 className="font-display text-lg text-forest-900">{c.title}</h3>
              <dl className="mt-3 space-y-1.5 text-sm">
                {[
                  ["Patient", c.patient],
                  ["Protocol", c.plan],
                  ["Timeline", c.duration],
                ].map(([k, v]) => (
                  <div key={k} className="flex gap-2">
                    <dt className="w-20 shrink-0 text-forest-800/50">{k}</dt>
                    <dd className="text-forest-800">{v}</dd>
                  </div>
                ))}
              </dl>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- gallery ---------------- */

function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <Section id="gallery">
      <div className="max-w-2xl">
        <Eyebrow>Inside the clinic</Eyebrow>
        <h2 className="mt-4 font-display text-3xl leading-tight text-forest-900 md:text-5xl">
          Where the work happens.
        </h2>
        <p className="mt-4 text-forest-800/70">
          Dedicated laser suites, single-use consumables and a dermatologist at
          the handpiece for every session.
        </p>
      </div>

      <div className="mt-12 grid auto-rows-[190px] grid-cols-2 gap-4 md:grid-cols-4">
        {gallery.map((g) => (
          <button
            key={g.src}
            onClick={() => setLightbox(g.src)}
            className={`group relative overflow-hidden rounded-2xl ${g.span}`}
          >
            <img
              src={g.src}
              alt={g.caption}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-forest-900/70 via-forest-900/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="absolute bottom-3 left-4 right-4 translate-y-2 text-left text-sm font-medium text-mint-50 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              {g.caption}
            </span>
          </button>
        ))}
      </div>

      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-forest-900/90 p-6 backdrop-blur-sm"
        >
          <img src={lightbox} alt="" className="max-h-[85vh] max-w-5xl rounded-2xl object-contain shadow-2xl" />
          <button className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-mint-50 text-forest-900">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </Section>
  );
}

/* ---------------- process ---------------- */

function Process() {
  return (
    <Section className="bg-mint-100">
      <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-4 font-display text-3xl leading-tight text-forest-900 md:text-4xl">
            A protocol, not a package.
          </h2>
          <p className="mt-4 text-forest-800/70">
            You'll never be sold a fixed "6-session deal" before anyone has
            looked at your skin under proper light.
          </p>
          <Btn className="mt-7">Start with a consult</Btn>
        </div>

        <ol className="relative space-y-8 border-l border-mint-300 pl-8">
          {steps.map((s) => (
            <li key={s.n} className="relative">
              <span className="absolute -left-[2.55rem] flex h-8 w-8 items-center justify-center rounded-full bg-forest-800 text-[11px] font-bold text-mint-50">
                {s.n}
              </span>
              <h3 className="font-display text-xl text-forest-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-forest-800/70">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

/* ---------------- doctor ---------------- */

function Doctor() {
  return (
    <Section id="doctor">
      <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
        <div className="relative">
          <div className="sticky top-28">
            <div className="relative">
              <div className="absolute -inset-3 rounded-[2rem] bg-mint-200" />
              <img
                src="/images/doctor.png"
                alt={doctor.name}
                className="relative aspect-[3/4] w-full rounded-[1.75rem] object-cover shadow-xl shadow-forest-900/10"
              />
              <div className="absolute -bottom-5 left-5 right-5 rounded-2xl bg-forest-800 px-5 py-4 text-mint-50 shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.18em] text-mint-400">
                      Google rating
                    </div>
                    <div className="font-display text-2xl">{doctor.rating}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] uppercase tracking-[0.18em] text-mint-400">
                      Board certified
                    </div>
                    <div className="font-display text-2xl">MBBS · DVDL</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Eyebrow>Meet your dermatologist</Eyebrow>
          <h2 className="mt-4 font-display text-3xl leading-tight text-forest-900 md:text-5xl">
            {doctor.name}
          </h2>
          <p className="mt-2 text-sm font-medium uppercase tracking-[0.12em] text-forest-600">
            {doctor.role}
          </p>

          <blockquote className="mt-7 border-l-2 border-forest-800/30 pl-5 font-display text-xl italic leading-snug text-forest-800 md:text-2xl">
            “{doctor.quote}”
          </blockquote>

          <p className="mt-7 leading-relaxed text-forest-800/75">{doctor.bio}</p>

          <div className="mt-9">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-forest-600">
              Qualified, certified, accountable
            </h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {doctor.credentials.map((c) => (
                <div
                  key={c.title}
                  className="rounded-2xl border border-mint-200 bg-white p-5 transition hover:border-mint-400"
                >
                  <span className="inline-flex h-8 items-center justify-center rounded-full bg-mint-100 px-3 text-xs font-bold text-forest-800">
                    {c.tag}
                  </span>
                  <div className="mt-3 text-sm font-semibold text-forest-900">{c.title}</div>
                  <p className="mt-1.5 text-xs leading-relaxed text-forest-800/65">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-9">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-forest-600">
              Areas of expertise
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {doctor.expertise.map((e, i) => (
                <span
                  key={e}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-medium ${
                    i < 3
                      ? "bg-forest-800 text-mint-50"
                      : "border border-forest-800/15 text-forest-800/80"
                  }`}
                >
                  {e}
                </span>
              ))}
            </div>
          </div>

          <Btn className="mt-9">Consult with Dr. Bhawna →</Btn>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- testimonials ---------------- */

function Testimonials() {
  return (
    <Section className="bg-mint-100">
      <div className="max-w-xl">
        <Eyebrow>Patient stories</Eyebrow>
        <h2 className="mt-4 font-display text-3xl leading-tight text-forest-900 md:text-4xl">
          In their words.
        </h2>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col justify-between rounded-3xl border border-mint-200 bg-white p-7"
          >
            <div>
              <div className="text-sm tracking-[0.2em] text-forest-600">★★★★★</div>
              <blockquote className="mt-4 leading-relaxed text-forest-800/85">
                “{t.quote}”
              </blockquote>
            </div>
            <figcaption className="mt-6 border-t border-mint-200 pt-4">
              <div className="text-sm font-semibold text-forest-900">{t.name}</div>
              <div className="text-xs text-forest-800/60">{t.treatment}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- faq ---------------- */

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="faq">
      <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
        <div>
          <Eyebrow>Frequently asked</Eyebrow>
          <h2 className="mt-4 font-display text-3xl leading-tight text-forest-900 md:text-4xl">
            Straight answers.
          </h2>
          <p className="mt-4 text-sm text-forest-800/70">
            Still unsure? Bring the question to your consult — nothing is rushed.
          </p>
        </div>

        <div className="divide-y divide-mint-200 border-y border-mint-200">
          {faqs.map((f, i) => (
            <div key={f.q}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-5 text-left"
              >
                <span className="font-display text-lg text-forest-900">{f.q}</span>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-forest-800/20 text-forest-800 transition-transform duration-300 ${
                    open === i ? "rotate-45 bg-forest-800 text-mint-50" : ""
                  }`}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  open === i ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="max-w-2xl text-sm leading-relaxed text-forest-800/75">{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------------- booking ---------------- */

function Booking() {
  const [sending, setSending] = useState(false);

  const openWhatsApp = (message: string) => {
    const phone = clinic.phone.replace(/\D/g, "");
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <Section id="book" className="bg-forest-900 text-mint-100">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-mint-400">
            <span className="h-px w-6 bg-mint-400/60" />
            Book appointment
          </span>
          <h2 className="mt-4 font-display text-3xl leading-tight text-mint-50 md:text-5xl">
            Consult with Dr. Bhawna.
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-mint-200/75">
            A one-on-one assessment, a written treatment plan, and honest
            guidance — that's how every appointment at {clinic.name} begins.
          </p>

          <div className="mt-9 space-y-4 text-sm">
            {[
              ["Clinic Address", clinic.location],
              ["Call Us", clinic.phone],
              ["Clinic Hours", clinic.hours],
            ].map(([k, v]) => (
              <div key={k} className="flex gap-4 border-t border-mint-100/12 pt-4">
                <span className="w-24 shrink-0 text-[11px] uppercase tracking-[0.16em] text-mint-400">{k}</span>
                <span className="text-mint-100">{v}</span>
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const data = new FormData(form);

            const fullName = String(data.get("fullName") || "").trim();
            const phone = String(data.get("phone") || "").trim();
            const email = String(data.get("email") || "").trim();
            const concern = String(data.get("concern") || "").trim();
            const message = String(data.get("message") || "").trim();

            const whatsappMessage = [
              `Hi ${clinic.name}, I'd like to book a consultation.`,
              "",
              `Name: ${fullName}`,
              `Phone: ${phone}`,
              `Email: ${email}`,
              `Primary concern: ${concern}`,
              message ? `Message: ${message}` : null,
            ]
              .filter(Boolean)
              .join("\n");

            const phoneNumber = clinic.phone.replace(/\D/g, "");
            const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
            setSending(true);
            window.open(url, "_blank", "noopener,noreferrer");
            setSending(false);
          }}
          className="rounded-3xl border border-mint-100/12 bg-mint-100/[0.06] p-7 md:p-9"
        >
          <div className="grid gap-4">
              {[
                { label: "Full name", type: "text", ph: "Your name", name: "fullName" },
                { label: "Phone", type: "tel", ph: "+91", name: "phone" },
                { label: "Email", type: "email", ph: "you@email.com", name: "email" },
              ].map((f) => (
                <label key={f.label} className="block">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-mint-400">
                    {f.label}
                  </span>
                  <input
                    required
                    name={f.name}
                    type={f.type}
                    placeholder={f.ph}
                    className="mt-2 w-full rounded-xl border border-mint-100/15 bg-forest-900/40 px-4 py-3 text-sm text-mint-50 placeholder:text-mint-200/35 outline-none transition focus:border-mint-400"
                  />
                </label>
              ))}
              <label className="block">
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-mint-400">
                  Primary concern
                </span>
                <select
                  name="concern"
                  className="mt-2 w-full rounded-xl border border-mint-100/15 bg-forest-900/40 px-4 py-3 text-sm text-mint-50 outline-none transition focus:border-mint-400"
                  defaultValue="Atrophic acne scars"
                >
                  {[
                    "Atrophic acne scars",
                    "Post-acne pigmentation",
                    "Active acne + scarring",
                    "Raised / keloid scars",
                    "Not sure — need assessment",
                  ].map((o) => (
                    <option key={o} className="bg-forest-900">
                      {o}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-mint-400">
                  Message (optional)
                </span>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Tell us how long you've had the scarring and what you've tried."
                  className="mt-2 w-full resize-none rounded-xl border border-mint-100/15 bg-forest-900/40 px-4 py-3 text-sm text-mint-50 placeholder:text-mint-200/35 outline-none transition focus:border-mint-400"
                />
              </label>
              <button
                type="submit"
                className="mt-2 rounded-full bg-mint-100 px-6 py-3.5 text-sm font-bold text-forest-900 transition hover:bg-white"
              >
                Send on WhatsApp
              </button>
              <p className="text-center text-[11px] text-mint-200/45">
                Your details will open in WhatsApp as a prefilled message.
              </p>
          </div>
        </form>
      </div>
    </Section>
  );
}

/* ---------------- footer ---------------- */

function Footer() {
  return (
    <footer className="border-t border-forest-800/10 bg-mint-100 px-5 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-start justify-between gap-8">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <img
                src="/images/logo.jpeg"
                alt={`${clinic.name} logo`}
                className="h-10  object-cover shadow-sm ring-1 ring-forest-800/10"
              />
             
            </div>
            <p className="mt-4 text-sm leading-relaxed text-forest-800/65">
              Dermatologist-led acne scar revision using the VirtuEx 1550 nm
              fractional laser and the QLARA Q-switched pigmentation platform.
            </p>
            <div className="mt-5 space-y-2 text-sm text-forest-800/70">
              <p>{clinic.address}</p>
              <p>{clinic.phone}</p>
              <p>{clinic.email}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-14 gap-y-2 text-sm">
            {links.map(([l, h]) => (
              <a key={h} href={h} className="text-forest-800/70 transition hover:text-forest-900">
                {l}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-forest-800/10 pt-6 text-xs text-forest-800/50">
          <span>© {new Date().getFullYear()} {clinic.name}. All rights reserved.</span>
          <span>
            Results vary between individuals. This page is informational and not a substitute for medical advice.
          </span>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- app ---------------- */

export default function App() {
  return (
    <div className="min-h-screen bg-mint-50 font-sans">
      <Nav />
      <main>
        <Hero />
        <Strip />
        <ScarTypes />
        <Technology />
        <Results />
        <Gallery />
        <Process />
        <Doctor />
        <Testimonials />
        <Faq />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}
