import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  FolderGit2,
  Link2,
  Mail,
} from "lucide-react";

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

        {/* Portrait composition */}
        <div className="relative mx-auto mt-2 w-full max-w-[430px] md:mt-0 md:max-w-none">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-64 w-64
              -translate-x-1/2 -translate-y-1/2 rounded-full
              bg-indigo-500/10 blur-[90px] dark:bg-indigo-500/15
              sm:h-80 sm:w-80"
          />

          {/* Portrait frame */}
          <div
            className="relative mx-auto h-[370px] w-[280px] overflow-hidden
              rounded-t-[150px] rounded-b-[42px]
              border border-gray-300/80
              bg-gradient-to-b from-[#e8ebf8] via-[#f1f2f8] to-[#f8f9fc]
              transition-colors duration-300
              dark:border-white/10 dark:from-[#20283b]
              dark:via-[#141925] dark:to-[#0b0d10]
              sm:h-[440px] sm:w-[330px]
              md:ml-auto md:mr-10 lg:h-[470px] lg:w-[350px]"
          >
            {/* Decorative rings */}
            <div
              aria-hidden="true"
              className="absolute -right-16 top-20 h-56 w-56
                rounded-full border border-[#6478e8]/15
                dark:border-[#a6b4ff]/15"
            />

            <div
              aria-hidden="true"
              className="absolute -left-20 top-36 h-60 w-60
                rounded-full border border-black/[0.06]
                dark:border-white/[0.06]"
            />

            {/* Portrait placeholder */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
              <div
                className="mb-5 flex h-24 w-24 items-center justify-center
                  rounded-full border border-[#6478e8]/20 bg-white/50
                  text-3xl font-light tracking-widest text-[#6478e8]
                  dark:border-white/15 dark:bg-white/[0.04]
                  dark:text-[#b7c4ff]"
              >
                KS
              </div>

              <p className="text-xs uppercase tracking-[0.25em] text-gray-700 dark:text-gray-300">
                Your Portrait
              </p>

              <p className="mt-2 text-xs leading-5 text-gray-500 dark:text-gray-500">
                Replace this placeholder
                <br />
                with your profile photo
              </p>
            </div>

            {/* Theme-aware bottom fade */}
            <div
              className="absolute inset-x-0 bottom-0 h-32
                bg-gradient-to-t from-[#f8f9fc] to-transparent
                dark:from-[#0b0d10]"
            />
          </div>

          {/* Caption */}
          <div className="absolute bottom-14 right-0 hidden max-w-[145px] md:block lg:right-[-4px]">
            <span className="mb-3 block h-px w-10 bg-[#8b9dff]/70" />
            <p className="text-xs leading-5 text-[var(--muted)]">
              Turning ideas
              <br />
              into sleek web
              <br />
              experiences.
            </p>
          </div>

          <span
            aria-hidden="true"
            className="absolute right-5 top-8 text-3xl font-extralight text-[#7d85df] dark:text-[#c4ceff]"
          >
            ✳
          </span>
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-black/[0.08] dark:bg-white/[0.08]" />
    </section>
  );
}
