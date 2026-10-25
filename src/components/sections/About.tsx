
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, BrainCircuit, Code2, Layers3 } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Software Development",
    description: "Building responsive, user-friendly applications with clean, maintainable code.",
  },
  {
    icon: BrainCircuit,
    title: "AI Engineering",
    description: "Exploring AI-powered applications and turning ideas into practical solutions.",
  },
  {
    icon: Layers3,
    title: "Learning by Building",
    description: "Strengthening my problem-solving skills through projects and consistent practice.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-b border-[var(--border)] bg-[var(--background)] px-5 py-24 text-[var(--foreground)] transition-colors duration-300 sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mb-14 flex items-center gap-3">
          <span className="h-px w-8 bg-[var(--accent)]" />
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--accent)]">
            A little about me
          </p>
        </div>

        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* Introduction */}
          <div>
            <h2 className="max-w-xl text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl">
              Curious by nature.
              <span className="mt-2 block text-[var(--muted)]">
                Developer by choice.
              </span>
            </h2>

            <div className="mt-8 max-w-xl space-y-5 text-[15px] leading-8 text-[var(--muted)]">
              <p>
                Hey, I&apos;m Kirtesh — a developer who enjoys turning ideas
                into useful digital experiences. I&apos;m interested in how
                technology works, how products are built, and how code can
                solve real-world problems.
              </p>

              <p>
                I&apos;m currently focused on software development, AI
                engineering, and strengthening my problem-solving skills
                through data structures and algorithms. I believe the best
                way to learn is to build, experiment, and keep improving.
              </p>

              <p>
                My goal is to create thoughtful, reliable products that
                combine good engineering with a great user experience.
              </p>
            </div>

            <Link
              href="#projects"
              className="group mt-9 inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-5 py-3 text-sm transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Explore my work
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          {/* Focus areas */}
          <div className="flex flex-col">
            <div className="mb-5 flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                What I&apos;m focused on
              </p>
              <ArrowDownRight
                size={18}
                className="text-[var(--accent)]"
              />
            </div>

            <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group flex gap-5 py-7"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] transition-colors duration-300 group-hover:border-[var(--accent)]/50">
                      <Icon
                        size={19}
                        strokeWidth={1.6}
                        className="text-[var(--accent)]"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="mb-2 flex items-center gap-3">
                        <span className="font-mono text-xs text-[var(--muted)]">
                          0{index + 1}
                        </span>
                        <h3 className="text-base font-medium">
                          {item.title}
                        </h3>
                      </div>

                      <p className="max-w-sm text-sm leading-6 text-[var(--muted)]">
                        {item.description}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={16}
                      className="mt-1 shrink-0 text-[var(--muted)] opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    />
                  </div>
                );
              })}
            </div>

            <p className="mt-5 text-xs leading-6 text-[var(--muted)]">
              Always learning. Always building. Always looking for the next
              problem worth solving.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
