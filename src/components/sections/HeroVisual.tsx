
import {
  Braces,
  Code2,
  Database,
  Layers3,
  Terminal,
  Workflow,
} from "lucide-react";

const technologies = [
  { name: "React", color: "text-sky-500" },
  { name: "Next.js", color: "text-[var(--foreground)]" },
  { name: "TypeScript", color: "text-blue-500" },
  { name: "PostgreSQL", color: "text-indigo-400" },
];

export default function HeroVisual() {
  return (
    <div className="relative mx-auto flex min-h-[390px] w-full max-w-[480px] items-center justify-center sm:min-h-[460px]">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[100px] sm:h-80 sm:w-80"
      />

      {/* Decorative orbit rings */}
      <div
        aria-hidden="true"
        className="absolute h-[300px] w-[300px] rounded-full border border-[var(--accent)]/10 sm:h-[390px] sm:w-[390px]"
      />
      <div
        aria-hidden="true"
        className="absolute h-[240px] w-[240px] rounded-full border border-[var(--border)] sm:h-[320px] sm:w-[320px]"
      />

      {/* Main code editor */}
      <div className="group relative z-10 w-full max-w-[390px] rotate-[-2deg] overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-2xl shadow-black/[0.06] transition-transform duration-500 hover:rotate-0 dark:shadow-black/20">
        {/* Window header */}
        <div className="flex h-12 items-center justify-between border-b border-[var(--border)] px-4">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
          </div>

          <div className="flex items-center gap-2 text-[11px] text-[var(--muted)]">
            <Code2 size={13} />
            <span>portfolio.tsx</span>
          </div>

          <Braces size={15} className="text-[var(--accent)]" />
        </div>

        {/* Editor content */}
        <div className="flex">
          {/* Line numbers */}
          <div className="flex flex-col gap-[11px] border-r border-[var(--border)] px-3 py-5 font-mono text-[10px] text-[var(--muted)]/60 sm:px-4">
            {Array.from({ length: 10 }, (_, i) => (
              <span key={i}>{i + 1}</span>
            ))}
          </div>

          {/* Code */}
          <div className="min-w-0 flex-1 overflow-hidden px-4 py-5 font-mono text-[11px] leading-[22px] sm:px-5 sm:text-xs">
            <p>
              <span className="text-violet-500">const</span>{" "}
              <span className="text-sky-600 dark:text-sky-400">developer</span>{" "}
              <span className="text-[var(--muted)]">= {"{"}</span>
            </p>

            <p className="pl-4">
              <span className="text-[var(--muted)]">name:</span>{" "}
              <span className="text-emerald-600 dark:text-emerald-400">
                &quot;Kirtesh&quot;
              </span>
              ,
            </p>

            <p className="pl-4">
              <span className="text-[var(--muted)]">role:</span>{" "}
              <span className="text-emerald-600 dark:text-emerald-400">
                &quot;Full-Stack Developer&quot;
              </span>
              ,
            </p>

            <p className="pl-4">
              <span className="text-[var(--muted)]">focus:</span> [
            </p>

            <p className="pl-8 text-emerald-600 dark:text-emerald-400">
              &quot;Building useful products&quot;,
            </p>
            <p className="pl-8 text-emerald-600 dark:text-emerald-400">
              &quot;Learning every day&quot;,
            </p>

            <p className="pl-4">],</p>

            <p className="pl-4">
              <span className="text-[var(--muted)]">available:</span>{" "}
              <span className="text-orange-600 dark:text-orange-300">
                true
              </span>
            </p>

            <p>
              <span className="text-[var(--muted)]">{"}"}</span>
              <span className="text-[var(--foreground)]">;</span>
            </p>

            <p className="pt-2 text-[var(--muted)]/70">
              // Turning ideas into reality
              <span className="ml-1 inline-block h-3.5 w-[5px] animate-pulse bg-[var(--accent)] align-middle" />
            </p>
          </div>
        </div>

        {/* Editor footer */}
        <div className="flex items-center justify-between border-t border-[var(--border)] px-4 py-2.5 text-[10px] text-[var(--muted)]">
          <span className="flex items-center gap-1.5">
            <Terminal size={12} />
            main
          </span>
          <span>TypeScript · UTF-8</span>
        </div>
      </div>

      {/* Floating technology card */}
      <div className="absolute -left-1 top-[12%] z-20 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-3 shadow-lg shadow-black/[0.04] sm:left-0 sm:p-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10">
            <Layers3 size={19} className="text-blue-500" />
          </div>
          <div>
            <p className="text-xs font-medium">Full-Stack</p>
            <p className="mt-1 text-[10px] text-[var(--muted)]">
              Frontend + Backend
            </p>
          </div>
        </div>
      </div>

      {/* Floating database card */}
      <div className="absolute -right-1 bottom-[17%] z-20 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-3 shadow-lg shadow-black/[0.04] sm:right-0 sm:p-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/10">
            <Database size={19} className="text-indigo-500" />
          </div>
          <div>
            <p className="text-xs font-medium">Database & APIs</p>
            <p className="mt-1 flex items-center gap-1.5 text-[10px] text-[var(--muted)]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Connected thinking
            </p>
          </div>
        </div>
      </div>

      {/* Technology chips */}
      <div className="absolute bottom-[3%] left-1/2 z-20 flex -translate-x-1/2 flex-wrap justify-center gap-2">
        {technologies.map((technology) => (
          <span
            key={technology.name}
            className={`rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-[10px] font-medium shadow-sm sm:text-[11px] ${technology.color}`}
          >
            {technology.name}
          </span>
        ))}
      </div>

      {/* Decorative accent */}
      <div
        aria-hidden="true"
        className="absolute right-[13%] top-[8%] h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_18px_var(--accent)]"
      />
      <Workflow
        size={19}
        strokeWidth={1.3}
        className="absolute bottom-[12%] left-[9%] text-[var(--accent)]/60"
      />
    </div>
  );
}
