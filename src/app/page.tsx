


const sections = [
  { id: "home", title: "Home" },
  { id: "about", title: "About Me" },
  { id: "projects", title: "Featured Projects" },
  { id: "skills", title: "Technologies I Work With" },
  { id: "contact", title: "Let's Connect" },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-5 pt-[76px] sm:px-8 lg:px-10">
      {sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className="flex min-h-[65vh] scroll-mt-24 flex-col justify-center border-b border-white/[0.07] py-20"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#8b9dff]">
            0{index + 1}
          </p>
          <h1 className="text-3xl font-medium tracking-tight sm:text-5xl">
            {section.title}
          </h1>
        </section>
      ))}
    </main>
  );
}
