
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";

const sections = [
 
  { id: "projects", title: "Some things I've built" },
  { id: "contact", title: "Have a project in mind?" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      <Hero />
      <About />
      <Skills />

      {sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className="scroll-mt-20 border-b border-[var(--border)] bg-[var(--background)] px-5 py-24 text-[var(--foreground)] transition-colors duration-300 sm:px-8 lg:px-10"
        >
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[var(--accent)]">
              0{index + 3} / Portfolio
            </p>

            <h2 className="max-w-2xl text-3xl font-medium tracking-tight sm:text-4xl">
              {section.title}
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-[var(--muted)]">
              More about my journey, skills, and projects coming soon.
            </p>
          </div>
        </section>
      ))}
    </main>
  );
}
