import Link from "next/link";
import Image from "next/image";
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
    image: "/images/projects/socialvibe.png",
    liveUrl: "https://social-media-app-liart-xi.vercel.app/",
    githubUrl: "https://github.com/kirteshshirodkar/SocialMediaApp",
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
    image: "/images/projects/leavetracker.png",
    liveUrl: "https://employee-leave-management-system-k8.vercel.app/",
    githubUrl:
      "https://github.com/kirteshshirodkar/Employee-Leave-Management-System",
  },
];

function ProjectPreview({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="group/preview relative aspect-[16/10] overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--background)]">
      {/* Screenshot */}
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover object-top transition-transform duration-700 ease-out group-hover/preview:scale-[1.03]"
      />

      {/* Subtle overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover/preview:opacity-30" />

      {/* Preview label */}
      <div className="absolute bottom-3 left-3 rounded-full border border-white/20 bg-black/60 px-3 py-1.5 text-[10px] font-medium tracking-wide text-white opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover/preview:opacity-100">
        PROJECT PREVIEW
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
              <ProjectPreview
                src={project.image}
                alt={`${project.title} application screenshot`}
              />

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
