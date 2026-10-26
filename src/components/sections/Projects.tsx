
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  ExternalLink,
  FolderGit2,
  Layers3,
} from "lucide-react";

const projects = [
  {
    number: "01",
    category: "FULL-STACK DEVELOPMENT",
    title: "Social Media Platform",
    description:
      "A full-stack social experience where users can create posts, share stories, interact with content, discover people, and build their network.",
    features: [
      "Posts, comments & likes",
      "Stories & personalized feeds",
      "Authentication & social connections",
      "Image and video uploads",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Clerk",
      "Cloudinary",
    ],
    liveUrl: "https://social-media-app-liart-xi.vercel.app/",
    githubUrl: "https://github.com/kirteshshirodkar/SocialMediaApp",
    visual: "social",
  },
  {
    number: "02",
    category: "FULL-STACK DEVELOPMENT",
    title: "Employee Leave Management",
    description:
      "A leave management system that streamlines requests and approvals through dedicated employee and manager portals.",
    features: [
      "Employee & manager dashboards",
      "Leave approval and rejection",
      "JWT authentication & role-based access",
      "Supporting document uploads",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "JWT",
      "Cloudinary",
    ],
    liveUrl:
      "https://employee-leave-management-system-k8.vercel.app/",
    githubUrl:
      "https://github.com/kirteshshirodkar/Employee-Leave-Management-System",
    visual: "leave",
  },
];

function ProjectPreview({ type }: { type: string }) {
  const isSocial = type === "social";

  return (
    <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--background)] p-5 sm:p-8">
      {/* Background decoration */}
      <div className="absolute -right-12 -top-16 h-48 w-48 rounded-full bg-[var(--accent)]/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-10 h-40 w-40 rounded-full bg-[var(--accent)]/10 blur-3xl" />

      {/* Browser window */}
      <div className="relative w-full max-w-md overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
        <div className="flex h-9 items-center gap-1.5 border-b border-[var(--border)] px-3">
          <span className="h-2 w-2 rounded-full bg-red-400/70" />
          <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
          <span className="h-2 w-2 rounded-full bg-green-400/70" />

          <div className="ml-3 h-4 flex-1 rounded-md bg-[var(--background)]" />
        </div>

        {isSocial ? (
          <div className="grid grid-cols-[42px_1fr] gap-3 p-3 sm:grid-cols-[56px_1fr] sm:gap-4 sm:p-5">
            <div className="space-y-3 pt-1">
              <div className="mx-auto h-7 w-7 rounded-lg bg-[var(--accent)]/20" />
              <div className="mx-auto h-5 w-5 rounded-md bg-[var(--border)]" />
              <div className="mx-auto h-5 w-5 rounded-md bg-[var(--border)]" />
              <div className="mx-auto h-5 w-5 rounded-md bg-[var(--border)]" />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="h-3 w-24 rounded bg-[var(--foreground)]/70" />
                <div className="h-5 w-5 rounded-full bg-[var(--accent)]/20" />
              </div>

              <div className="flex gap-2 overflow-hidden">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="flex min-w-0 flex-1 flex-col items-center gap-1.5 rounded-lg border border-[var(--border)] p-2"
                  >
                    <div className="h-6 w-6 rounded-full bg-[var(--accent)]/30" />
                    <div className="h-1.5 w-8 rounded bg-[var(--border)]" />
                  </div>
                ))}
              </div>

              <div className="rounded-lg border border-[var(--border)] p-3">
                <div className="mb-3 flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-[var(--accent)]/30" />
                  <div className="h-2 w-20 rounded bg-[var(--foreground)]/50" />
                </div>
                <div className="mb-3 h-16 rounded-md bg-[var(--accent)]/10 sm:h-20" />
                <div className="h-2 w-3/4 rounded bg-[var(--border)]" />
                <div className="mt-2 h-2 w-1/2 rounded bg-[var(--border)]" />
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-[65px_1fr] gap-3 p-3 sm:grid-cols-[90px_1fr] sm:gap-4 sm:p-5">
            <div className="space-y-3 rounded-lg border border-[var(--border)] p-2">
              <div className="mb-4 h-3 w-full rounded bg-[var(--accent)]/30" />
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="h-2 rounded bg-[var(--border)]"
                />
              ))}
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <div className="h-3 w-24 rounded bg-[var(--foreground)]/70" />
                  <div className="mt-2 h-2 w-16 rounded bg-[var(--border)]" />
                </div>
                <div className="h-6 w-12 rounded-md bg-[var(--accent)]/20" />
              </div>

              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="rounded-md border border-[var(--border)] p-2"
                  >
                    <div className="h-2 w-8 rounded bg-[var(--border)]" />
                    <div className="mt-3 h-4 w-6 rounded bg-[var(--accent)]/40" />
                  </div>
                ))}
              </div>

              <div className="space-y-3 rounded-lg border border-[var(--border)] p-3">
                <div className="h-2 w-2/3 rounded bg-[var(--foreground)]/50" />
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 border-t border-[var(--border)] pt-2"
                  >
                    <div className="h-4 w-4 rounded-full bg-[var(--accent)]/20" />
                    <div className="h-2 flex-1 rounded bg-[var(--border)]" />
                    <div className="h-4 w-10 rounded bg-[var(--accent)]/20" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 border-b border-[var(--border)] bg-[var(--background)] px-5 py-24 text-[var(--foreground)] transition-colors duration-300 sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-14">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[var(--accent)]" />
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--accent)]">
              Selected work
            </p>
          </div>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="max-w-2xl text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl">
              Projects built with purpose.
              <span className="block text-[var(--muted)]">
                Ideas turned into applications.
              </span>
            </h2>

            <p className="max-w-sm text-sm leading-7 text-[var(--muted)]">
              A selection of projects where I put my development skills into
              practice and solve real problems.
            </p>
          </div>
        </div>

        {/* Project cards */}
        <div className="space-y-7">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group grid gap-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 transition-colors duration-300 hover:border-[var(--accent)]/40 sm:p-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-9 lg:p-7"
            >
              {/* Preview */}
              <ProjectPreview type={project.visual} />

              {/* Details */}
              <div className="flex flex-col py-2 lg:py-3">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--accent)] sm:text-xs">
                    {project.category}
                  </p>
                  <span className="font-mono text-xs text-[var(--muted)]">
                    {project.number}
                  </span>
                </div>

                <h3 className="text-2xl font-medium tracking-tight sm:text-3xl">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                  {project.description}
                </p>

                <ul className="mt-5 space-y-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-[var(--foreground)]"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-[var(--border)] px-2.5 py-1 text-[11px] text-[var(--muted)]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-[var(--border)] pt-5">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--foreground)] px-4 py-2.5 text-sm font-medium text-[var(--background)] transition-opacity hover:opacity-80"
                  >
                    Live Demo
                    <ExternalLink size={15} />
                  </Link>

                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-4 py-2.5 text-sm transition-colors hover:border-[var(--accent)]/60 hover:text-[var(--accent)]"
                  >
                    <FolderGit2 size={16} />
                    Source Code
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom link */}
        <div className="mt-10 flex flex-col gap-4 border-t border-[var(--border)] pt-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium">
              More experiments are on GitHub.
            </p>
            <p className="mt-1 text-sm text-[var(--muted)]">
              Explore my code, implementations, and ongoing work.
            </p>
          </div>

          <Link
            href="https://github.com/kirteshshirodkar"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-fit items-center gap-2 text-sm text-[var(--accent)] transition-opacity hover:opacity-75"
          >
            Visit my GitHub
            <ArrowDownRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
