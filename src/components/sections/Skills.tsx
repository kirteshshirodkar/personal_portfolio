
import {
  Code2,
  BrainCircuit,
  Wrench,
  ArrowUpRight,
} from "lucide-react";

const skillGroups = [
  {
    number: "01",
    title: "Fullstack Development",
    description: "Building modern, responsive web experiences.",
    icon: Code2,
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "SQL",
      "PostgreSQL",
      "Express.js",
      "REST API's"

    ],
  },
  {
    number: "02",
    title: "Programming & DSA",
    description: "Writing efficient code and solving problems.",
    icon: BrainCircuit,
    skills: ["C++", "Python","JavaScript","Java", "Data Structures", "Algorithms", "Problem Solving"],
  },
  {
    number: "03",
    title: "Tools & AI Engineering",
    description: "Exploring tools and technologies to build useful products.",
    icon: Wrench,
    skills: ["Git", "GitHub","Python","AI Optimization", "REST APIs", "AI/ML Fundamentals"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 border-b border-[var(--border)] bg-[var(--background)] px-5 py-24 text-[var(--foreground)] transition-colors duration-300 sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mb-14">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[var(--accent)]" />
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--accent)]">
              My toolkit
            </p>
          </div>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="max-w-2xl text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl">
              Technologies I work with
              <span className="block text-[var(--muted)]">
                and continue to explore.
              </span>
            </h2>

            <p className="max-w-sm text-sm leading-7 text-[var(--muted)]">
              A growing toolkit shaped by hands-on projects, problem-solving,
              and a curiosity for how things work.
            </p>
          </div>
        </div>

        {/* Skill categories */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <article
                key={group.number}
                className="group flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/50 sm:p-7"
              >
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--background)]">
                    <Icon
                      size={20}
                      strokeWidth={1.6}
                      className="text-[var(--accent)]"
                    />
                  </div>

                  <span className="font-mono text-xs text-[var(--muted)]">
                    {group.number}
                  </span>
                </div>

                <h3 className="text-lg font-medium tracking-tight">
                  {group.title}
                </h3>

                <p className="mt-2 min-h-12 text-sm leading-6 text-[var(--muted)]">
                  {group.description}
                </p>

                <div className="my-6 h-px bg-[var(--border)]" />

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs text-[var(--foreground)] transition-colors duration-200 hover:border-[var(--accent)]/60 hover:text-[var(--accent)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex justify-end pt-7">
                  <ArrowUpRight
                    size={17}
                    className="text-[var(--muted)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--accent)]"
                  />
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-8 flex flex-col gap-3 border-t border-[var(--border)] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[var(--muted)]">
            Still learning. Still experimenting. Always building.
          </p>

          <a
            href="#projects"
            className="group inline-flex w-fit items-center gap-2 text-sm text-[var(--accent)] transition-opacity hover:opacity-75"
          >
            See these skills in action
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
