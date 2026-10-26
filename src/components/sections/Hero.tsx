import Link from "next/link";

import {
  ArrowDownRight,
  ArrowRight,
  FolderGit2,
  Link2,
  Mail,
} from "lucide-react";

import HeroVisual from "./HeroVisual";
const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/",
    icon: FolderGit2,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: Link2,
  },
  {
    label: "Email",
    href: "mailto:your-email@example.com",
    icon: Mail,
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-[680px] overflow-hidden
        bg-[var(--background)] text-[var(--foreground)]
        transition-colors duration-300"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[5%] top-16 -z-10
          h-[420px] w-[420px] rounded-full bg-[#5269d8]/10
          blur-[120px]"
      />

      <div className="mx-auto grid min-h-[680px] max-w-6xl items-center gap-10 px-5 pb-16 pt-28 sm:px-8 md:grid-cols-2 md:gap-8 md:pb-20 lg:px-10">
        {/* Introduction */}
        <div className="relative z-10 max-w-xl">
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-7 bg-[#8b9dff]" />
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-gray-500 dark:text-gray-400">
              Fullstack Developer
            </p>
          </div>

          <h1 className="text-[42px] font-medium leading-[1.12] tracking-[-0.045em] sm:text-5xl lg:text-[62px]">
            Hi, I&apos;m
            <span className="mt-2 block bg-gradient-to-r from-[#527cc9] via-[#7d78db] to-[#aa79d5] bg-clip-text pb-2 text-transparent dark:from-[#83c9ff] dark:via-[#9aa8ff] dark:to-[#c2a0ff]">
              Kirtesh
              <br className="hidden sm:block" /> Shirodkar
              <span className="animate-pulse text-[#7d85df] dark:text-[#a6b4ff]">
                |
              </span>
            </span>
          </h1>

          <p className="mt-5 max-w-[430px] text-[15px] leading-7 text-[var(--muted)] sm:text-base">
            I build modern web applications with clean code, thoughtful design,
            and a passion for solving real-world problems.
          </p>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full
                bg-[#171923] px-6 py-3 text-sm font-medium text-white
                transition-all duration-300 hover:bg-[#303345]
                hover:shadow-[0_0_30px_rgba(139,157,255,0.2)]
                dark:bg-[#e8ecf4] dark:text-[#0b0d10]
                dark:hover:bg-white"
            >
              View My Work
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full
    border border-black/20 px-6 py-3 text-sm font-medium
    text-gray-950 transition-all duration-300
    hover:border-[#7d85df]/60 hover:bg-black/[0.03]
    dark:border-white/20 dark:text-gray-400
    dark:hover:border-[#8b9dff]/60 dark:hover:bg-white/[0.04]"
            >
              Get In Touch
              <ArrowDownRight size={15} />
            </Link>
          </div>

          {/* Social links */}
          <div className="mt-9 flex items-center gap-5">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="text-gray-500 transition-colors duration-200
                  hover:text-[#6478e8] dark:text-gray-400
                  dark:hover:text-[#a6b4ff]"
              >
                <Icon size={19} strokeWidth={1.7} />
              </a>
            ))}
          </div>
        </div>

        {/* Developer visual */}
        <div className="relative mx-auto w-full max-w-[480px] md:mt-0">
          <HeroVisual />
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-black/[0.08] dark:bg-white/[0.08]" />
    </section>
  );
}
