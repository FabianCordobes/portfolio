import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fabián Ariel Cordobés | Full Stack & Backend Developer",
  description:
    "Portfolio profesional de Fabián Ariel Cordobés. Full Stack Developer semi senior especializado en TypeScript, Node.js, NestJS, AWS, APIs y sistemas backend. Experiencia, proyectos y tecnologías.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Fabián Ariel Cordobés | Full Stack & Backend Developer",
    description:
      "Conocé la experiencia profesional y los proyectos de Fabián Cordobés: TypeScript, Node.js, NestJS, AWS, React y Next.js.",
    url: "/portfolio",
    type: "profile",
    locale: "en_US",
  },
  twitter: { card: "summary" },
};

const profilePageStructuredData = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://portfolio-hazel-six-lrkttprbjn.vercel.app/portfolio#profile",
  url: "https://portfolio-hazel-six-lrkttprbjn.vercel.app/portfolio",
  name: "Fabián Ariel Cordobés | Full Stack & Backend Developer",
  inLanguage: "en",
  mainEntity: {
    "@id": "https://portfolio-hazel-six-lrkttprbjn.vercel.app/#person",
    "@type": "Person",
    name: "Fabián Ariel Cordobés",
    jobTitle: "Full Stack Developer",
    sameAs: [
      "https://www.linkedin.com/in/fabi%C3%A1n-ariel-cordob%C3%A9s-956539234/",
      "https://github.com/FabianCordobes",
    ],
  },
};

const LINKS = {
  linkedin: "https://www.linkedin.com/in/fabi%C3%A1n-ariel-cordob%C3%A9s-956539234/",
  github: "https://github.com/FabianCordobes",
};

const navigation = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Resume", href: "/resume" },
];

const experience = [
  {
    period: "2025 — 2026",
    role: "Full Stack / Backend Developer",
    organization: "ISCX",
    summary:
      "Developed and maintained REST APIs, backend business rules, AWS Lambda serverless processes and external system integrations. Worked with DynamoDB and MySQL, writing automated unit and integration tests with Jest and SuperTest.",
    technologies: ["TypeScript", "Node.js", "NestJS", "AWS Lambda", "DynamoDB", "MySQL", "Jest"],
  },
  {
    period: "2023 — 2025",
    role: "Full Stack Developer",
    organization: "BuildVision",
    summary:
      "Full stack application development, connecting frontend experiences with backend functionality and supporting the evolution of web-based products.",
    technologies: ["JavaScript", "TypeScript", "React", "Node.js"],
  },
  {
    period: "2023",
    role: "Frontend Developer",
    organization: "Social Wave",
    summary:
      "Frontend development with responsive interfaces and reusable components, collaborating on web experiences and their implementation.",
    technologies: ["React", "JavaScript", "CSS"],
  },
];

const projects = [
  {
    number: "01",
    category: "Backend · Mobile · MVP in progress",
    title: "FlowOps",
    description:
      "Work-order management with defined status transitions, role-based permissions, approvals and auditable workflow history. API built around business rules and a mobile experience.",
    technologies: ["NestJS", "TypeScript", "React Native", "PostgreSQL"],
    repository: "https://github.com/FabianCordobes/flowops",
    live: null,
  },
  {
    number: "02",
    category: "Web · Client project",
    title: "Tamara Atadía",
    description:
      "Digital portfolio and personal-brand website with an editorial visual identity, responsive layouts and content management.",
    technologies: ["Next.js", "TypeScript", "Sanity", "Tailwind CSS"],
    repository: "https://github.com/FabianCordobes/tamara-atadia-portfolio",
    live: "https://tamara-atadia-portfolio.vercel.app",
  },
  {
    number: "03",
    category: "Frontend · E-commerce",
    title: "E-commerce App",
    description:
      "Online storefront experience featuring product discovery, client-side state management and a responsive shopping interface.",
    technologies: ["React", "Redux Toolkit", "Firebase", "Sass"],
    repository: "https://github.com/FabianCordobes/eCommerceApp",
    live: "https://e-commerce-app-eta-two.vercel.app",
  },
];

const skillGroups = [
  { title: "Backend & APIs", items: ["TypeScript", "Node.js", "NestJS", "Express", "REST APIs"] },
  { title: "Cloud & Data", items: ["AWS Lambda", "DynamoDB", "PostgreSQL", "MySQL", "Docker"] },
  { title: "Frontend & Mobile", items: ["React", "Next.js", "React Native", "Tailwind CSS"] },
  { title: "Quality & Delivery", items: ["Jest", "SuperTest", "Git", "CI/CD"] },
];

const linkClass =
  "inline-flex min-h-12 items-center justify-center rounded-full px-5 py-3 text-base font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c8ff62]";

function SectionHeading({
  index,
  title,
  introduction,
  headingId,
}: {
  index: string;
  title: string;
  introduction?: string;
  headingId: string;
}) {
  return (
    <div className="mb-8 grid gap-4 border-t border-white/15 pt-7 sm:mb-10 md:grid-cols-[190px_minmax(0,1fr)] md:gap-10">
      <p className="pt-1 text-sm font-semibold uppercase tracking-[0.12em] text-[#c8ff62]">{index}</p>
      <div>
        <h2 id={headingId} className="text-4xl font-semibold leading-[1.06] tracking-[-0.045em] text-white sm:text-5xl">{title}</h2>
        {introduction && <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/75">{introduction}</p>}
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <main id="top" lang="en" className="min-h-screen bg-[#080909] text-[#f6f6f3]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageStructuredData) }}
      />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-[#c8ff62] focus:px-4 focus:py-3 focus:font-semibold focus:text-black"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-50 border-b border-white/15 bg-[#080909]/95 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-x-4 gap-y-3 px-5 py-4 sm:px-8 lg:flex-nowrap">
          <a
            href="/"
            className="text-lg font-semibold tracking-tight text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c8ff62]"
            aria-label="Fabián Cordobés — go to services"
          >
            FABIÁN<span className="text-[#c8ff62]">.</span>
          </a>
          <nav aria-label="Professional portfolio navigation" className="order-3 flex w-full items-center gap-5 overflow-x-auto pb-1 text-sm font-medium text-white/80 sm:order-2 sm:w-auto sm:pb-0">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="shrink-0 py-2 transition hover:text-[#c8ff62] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#c8ff62]"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="order-2 shrink-0 rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white transition hover:border-[#c8ff62] hover:text-[#c8ff62] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c8ff62] sm:order-3"
          >
            LinkedIn ↗
          </a>
        </div>
      </header>

      <div id="main-content">
        <section aria-labelledby="portfolio-title" className="relative overflow-hidden border-b border-white/15">
          <div aria-hidden="true" className="pointer-events-none absolute -right-48 top-0 h-[480px] w-[480px] rounded-full bg-[#c8ff62]/[0.075] blur-[110px]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-24 lg:grid-cols-[minmax(0,1.5fr)_minmax(270px,.5fr)] lg:items-end lg:gap-16">
            <div>
              <p className="mb-6 text-sm font-semibold uppercase tracking-[0.16em] text-[#c8ff62]">
                PROFESSIONAL PROFILE · ARGENTINA
              </p>
              <h1 id="portfolio-title" className="max-w-5xl text-5xl font-semibold leading-[0.99] tracking-[-0.06em] text-white sm:text-7xl lg:text-[5.6rem]">
                Fabián Ariel<br />Cordobés<span className="text-[#c8ff62]">.</span>
              </h1>
              <p className="mt-7 max-w-3xl text-2xl font-medium leading-snug tracking-[-0.025em] text-white sm:text-3xl">
                Full Stack Developer <span className="text-[#c8ff62]">/ Backend Focus</span>
              </p>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/75">
                TypeScript · Node.js · NestJS · AWS · React
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#projects" className={linkClass + " bg-[#c8ff62] text-black hover:bg-[#dcff9b]"}>
                  View selected work <span aria-hidden="true" className="ml-2">↘</span>
                </a>
                <a href="/resume" className={linkClass + " border border-white/30 text-white hover:border-[#c8ff62]"}>
                  View resume ↗
                </a>
                <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className={linkClass + " border border-white/30 text-white hover:border-white"}>
                  GitHub ↗
                </a>
              </div>
            </div>

            <aside aria-label="Professional overview" className="border-l-2 border-[#c8ff62] pl-5 sm:pl-6">
              <p className="text-sm font-semibold uppercase tracking-[0.13em] text-[#c8ff62]">AT A GLANCE</p>
              <dl className="mt-5 space-y-5">
                <div>
                  <dt className="text-sm text-white/60">Experience</dt>
                  <dd className="mt-1 text-lg font-medium text-white">3+ years</dd>
                </div>
                <div>
                  <dt className="text-sm text-white/60">Roles</dt>
                  <dd className="mt-1 text-lg font-medium text-white">Full Stack Developer · Backend Developer</dd>
                </div>
                <div>
                  <dt className="text-sm text-white/60">Specialization</dt>
                  <dd className="mt-1 text-lg font-medium text-white">Backend · APIs · Integrations</dd>
                </div>
                <div>
                  <dt className="text-sm text-white/60">Opportunities</dt>
                  <dd className="mt-1 text-lg font-medium text-white">Full Stack / Backend · Semi Senior</dd>
                </div>
                <div>
                  <dt className="text-sm text-white/60">Location</dt>
                  <dd className="mt-1 text-lg font-medium text-white">Buenos Aires, Argentina · Remote</dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        <section id="about" aria-labelledby="about-heading" className="scroll-mt-32">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
            <SectionHeading headingId="about-heading" index="01 / ABOUT" title="Building reliable software, end to end." />
            <div className="grid gap-7 md:grid-cols-[190px_minmax(0,1fr)] md:gap-10">
              <p className="text-sm font-medium uppercase tracking-[0.12em] text-white/55">PROFILE</p>
              <div className="max-w-3xl space-y-5 text-lg leading-[1.8] text-white/80">
                <p>
                  I&apos;m a Full Stack Developer with 3+ years of experience building web applications,
                  REST APIs, backend integrations and business workflows. My main focus is backend
                  development with TypeScript, Node.js, NestJS and AWS.
                </p>
                <p>
                  I&apos;ve contributed to production systems involving business logic, serverless
                  processes, SQL and NoSQL databases, and automated testing. I also work with
                  React, Next.js and React Native across the full development lifecycle.
                </p>
                <p>
                  I&apos;m interested in Full Stack and Backend Developer opportunities, including
                  remote positions with teams in Argentina and internationally.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" aria-labelledby="experience-heading" className="scroll-mt-32 bg-[#0d0e0e]">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
            <SectionHeading headingId="experience-heading" index="02 / EXPERIENCE" title="Professional experience." introduction="A summary of my recent work across backend systems and web development." />
            <div className="space-y-4">
              {experience.map((item) => (
                <article key={item.organization} className="grid gap-5 rounded-2xl border border-white/15 bg-white/[0.025] p-6 sm:p-8 md:grid-cols-[190px_minmax(0,1fr)] md:gap-10">
                  <p className="pt-1 text-base font-medium text-[#c8ff62]">{item.period}</p>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{item.role}</h3>
                    <p className="mt-2 text-lg font-semibold text-white/90">{item.organization}</p>
                    <p className="mt-4 max-w-3xl text-base leading-7 text-white/75">{item.summary}</p>
                    <ul aria-label={"Technologies used at " + item.organization} className="mt-5 flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <li key={tech} className="rounded-full border border-white/20 px-3 py-1.5 text-sm text-white/80">{tech}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" aria-labelledby="projects-heading" className="scroll-mt-32">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
            <SectionHeading headingId="projects-heading" index="03 / FEATURED" title="Selected projects." introduction="A selection of work highlighting different areas of my engineering practice." />
            <div className="grid gap-5 lg:grid-cols-3">
              {projects.map((project) => (
                <article key={project.number} className="flex flex-col rounded-2xl border border-white/15 bg-white/[0.025] p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-sm font-semibold uppercase tracking-[0.1em] text-[#c8ff62]">{project.category}</p>
                    <span aria-hidden="true" className="text-sm font-medium text-white/50">{project.number}</span>
                  </div>
                  <h3 className="mt-7 text-3xl font-semibold tracking-tight text-white">{project.title}</h3>
                  <p className="mt-4 flex-1 text-base leading-7 text-white/75">{project.description}</p>
                  <ul aria-label={project.title + " technologies"} className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <li key={tech} className="rounded-full border border-white/20 px-3 py-1.5 text-sm text-white/80">{tech}</li>
                    ))}
                  </ul>
                  <div className="mt-7 flex flex-wrap gap-4 border-t border-white/15 pt-5 text-base font-semibold">
                    <a href={project.repository} target="_blank" rel="noopener noreferrer" className="text-[#c8ff62] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#c8ff62]">
                      GitHub ↗
                    </a>
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-white underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#c8ff62]">
                        Live site ↗
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" aria-labelledby="skills-heading" className="scroll-mt-32 bg-[#0d0e0e]">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
            <SectionHeading headingId="skills-heading" index="04 / EXPERTISE" title="Technical skills." introduction="Technologies I use to design, implement, test and maintain software." />
            <div className="grid gap-5 sm:grid-cols-2">
              {skillGroups.map((group) => (
                <section key={group.title} aria-label={group.title} className="rounded-2xl border border-white/15 bg-white/[0.025] p-6 sm:p-8">
                  <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item} className="rounded-full bg-white/10 px-3.5 py-2 text-base text-white/90">{item}</li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-32 px-5 py-5 sm:px-8">
          <div className="mx-auto max-w-7xl rounded-3xl bg-[#c8ff62] p-7 text-black sm:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-black/70">05 / CONTACT</p>
            <h2 id="contact-heading" className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.05em] sm:text-6xl">
              Let&apos;s build something meaningful.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-black/80">
              Interested in collaborating or discussing a Full Stack or Backend Developer opportunity? Reach out through LinkedIn.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass + " bg-black text-white hover:bg-[#202020] focus-visible:outline-black"}>
                Connect on LinkedIn ↗
              </a>
              <a href="/resume" className={linkClass + " border border-black/40 text-black hover:border-black focus-visible:outline-black"}>
                Read resume ↗
              </a>
              <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className={linkClass + " border border-black/40 text-black hover:border-black focus-visible:outline-black"}>
                Explore GitHub ↗
              </a>
            </div>
          </div>
        </section>
      </div>

      <footer className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-5 py-10 text-base text-white/65 sm:px-8">
        <p>© {new Date().getFullYear()} Fabián Cordobés · Full Stack Developer</p>
        <div className="flex flex-wrap gap-6">
          <a href="#top" className="hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#c8ff62]">Back to top ↑</a>
          <a href="/" className="hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#c8ff62]">Web & digital services ↗</a>
        </div>
      </footer>
    </main>
  );
}
