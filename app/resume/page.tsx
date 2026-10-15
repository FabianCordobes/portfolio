import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Fabián Ariel Cordobés — Full Stack / Backend Developer",
  description:
    "Text-based professional resume for Fabián Ariel Cordobés. Full Stack Developer with backend focus: TypeScript, Node.js, NestJS, AWS, PostgreSQL, REST APIs, testing.",
  alternates: { canonical: "/resume" },
  robots: { index: false, follow: true },
};

const contact = {
  email: "fabianarielcordobes@gmail.com",
  linkedin: "https://www.linkedin.com/in/fabi%C3%A1n-ariel-cordob%C3%A9s-956539234/",
  github: "https://github.com/FabianCordobes",
  portfolio: "https://portfolio-hazel-six-lrkttprbjn.vercel.app/portfolio",
};

const experience = [
  {
    position: "Full Stack / Backend Developer",
    company: "ISCX",
    dates: "2025 - 2026",
    highlights: [
      "Developed and maintained REST APIs and business logic using TypeScript, Node.js and NestJS.",
      "Implemented AWS Lambda serverless workflows and internal/external service integrations.",
      "Worked with DynamoDB and MySQL, including application state, queries and data processing.",
      "Wrote unit and integration tests using Jest and SuperTest to support software reliability.",
    ],
  },
  {
    position: "Full Stack Developer",
    company: "BuildVision",
    dates: "Apr 2023 - Mar 2025",
    highlights: [
      "Developed features for a web platform connecting construction-related businesses and customers.",
      "Implemented responsive UI components and frontend/backend integrations.",
    ],
  },
  {
    position: "Front-End Developer",
    company: "Social Wave",
    dates: "Jul 2023 - Nov 2023",
    highlights: [
      "Developed responsive interfaces with React, Redux and Tailwind CSS.",
      "Collaborated on functional improvements based on business and client requirements.",
    ],
  },
];

const skillLines = [
  { label: "Backend", value: "TypeScript, Node.js, NestJS, Express, REST APIs, JWT, authentication, authorization" },
  { label: "Cloud & databases", value: "AWS Lambda, DynamoDB, PostgreSQL, MySQL, Supabase, Docker" },
  { label: "Frontend & mobile", value: "React, Next.js, React Native, Expo, JavaScript, Tailwind CSS" },
  { label: "Testing & tools", value: "Jest, SuperTest, Git, CI/CD, Postman" },
];

export default function ResumePage() {
  return (
    <main lang="en" className="mx-auto max-w-[860px] bg-white px-5 py-8 text-[#161616] sm:px-10 sm:py-12 print:max-w-none print:px-0 print:py-0">
      <nav aria-label="Resume links" className="mb-8 flex flex-wrap gap-4 border-b border-gray-200 pb-5 text-sm print:hidden">
        <a className="underline underline-offset-4" href="/portfolio">← Professional portfolio</a>
        <a className="underline underline-offset-4" href="/">Web services</a>
      </nav>

      <header className="border-b-2 border-gray-900 pb-5">
        <h1 className="text-[2rem] font-bold leading-tight tracking-tight sm:text-4xl">Fabián Ariel Cordobés</h1>
        <p className="mt-2 text-lg font-semibold">Full Stack Developer | Backend Developer</p>
        <p className="mt-2 text-base">Buenos Aires, Argentina | Open to remote and international opportunities</p>
        <address className="mt-2 not-italic">
          <a href={`mailto:${contact.email}`} className="underline underline-offset-2">{contact.email}</a>
          <span aria-hidden="true"> | </span>
          <a href={contact.linkedin} className="underline underline-offset-2">LinkedIn</a>
          <span aria-hidden="true"> | </span>
          <a href={contact.github} className="underline underline-offset-2">GitHub</a>
          <span aria-hidden="true"> | </span>
          <a href={contact.portfolio} className="underline underline-offset-2">Portfolio</a>
        </address>
      </header>

      <section aria-labelledby="resume-summary" className="mt-7">
        <h2 id="resume-summary" className="text-xl font-bold">Professional Summary</h2>
        <p className="mt-2 leading-7">
          Full Stack Developer with 3+ years of experience building web applications, REST APIs,
          backend integrations and business workflows. Strong backend focus with TypeScript,
          Node.js, NestJS and AWS; experienced with SQL and NoSQL databases, automated testing
          and React-based frontend applications. Interested in Semi Senior (Mid-Level)
          Full Stack and Backend Developer positions.
        </p>
      </section>

      <section aria-labelledby="resume-skills" className="mt-7">
        <h2 id="resume-skills" className="text-xl font-bold">Technical Skills</h2>
        <dl className="mt-2 space-y-2">
          {skillLines.map(({ label, value }) => (
            <div key={label}>
              <dt className="inline font-semibold">{label}: </dt>
              <dd className="inline">{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section aria-labelledby="resume-experience" className="mt-7">
        <h2 id="resume-experience" className="text-xl font-bold">Professional Experience</h2>
        <div className="mt-4 space-y-6">
          {experience.map((job) => (
            <article key={job.company} className="break-inside-avoid">
              <h3 className="text-lg font-semibold">{job.position} — {job.company}</h3>
              <p className="text-sm">{job.dates}</p>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                {job.highlights.map((item) => <li key={item} className="leading-6">{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="resume-projects" className="mt-7 break-inside-avoid">
        <h2 id="resume-projects" className="text-xl font-bold">Selected Project</h2>
        <h3 className="mt-3 text-lg font-semibold">FlowOps — Work Order Management (MVP in development)</h3>
        <p className="mt-1 leading-7">
          Developed a mobile and backend application for managing work orders, permissions,
          assignments and approval flows. Implemented a state-based workflow with business
          validation and auditable status history.
        </p>
        <p className="mt-1"><strong>Technologies:</strong> TypeScript, NestJS, React Native, Expo, PostgreSQL</p>
        <p><a href="https://github.com/FabianCordobes/flowops" className="underline underline-offset-2">github.com/FabianCordobes/flowops</a></p>
      </section>

      <section aria-labelledby="resume-education" className="mt-7 break-inside-avoid">
        <h2 id="resume-education" className="text-xl font-bold">Education & Languages</h2>
        <p className="mt-2">UTN — Web Development</p>
        <p>Spanish: Native | English: Intermediate</p>
      </section>

      <aside className="mt-10 border-t border-gray-200 pt-4 text-sm text-gray-600 print:hidden">
        This page uses selectable text and standard headings for easy review.
        To save a PDF, open your browser&apos;s Print menu and choose “Save as PDF”.
        Adapt the resume to each job description before applying.
      </aside>
    </main>
  );
}
