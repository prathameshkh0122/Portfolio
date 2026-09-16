const projects = [
  {
    name: "Suspicious Bitcoin Flow Monitor",
    tag: "Made by Team Nexora — Smart India Hackathon (SIH26146)",
    description:
      "A rule-based detection engine that flags suspicious Bitcoin transaction flows, visualized through an interactive dashboard. Built under the Cybersecurity domain. Led a 6-member team as Team Leader.",
    stack: ["React 18", "Vite", "Recharts", "Express / Node.js", "blockchain.info API"],
  },
  {
    name: "HOSPEX — Hospitality Resource Exchange",
    tag: "Prototype / Demo (frontend only)",
    description:
      "A marketplace MVP letting hotels, restaurants, and cafés exchange or donate surplus resources — furniture, food, linen, kitchen equipment. Currently a frontend-only prototype.",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Audit System — Local Codebase Auditor",
    tag: "Cybersecurity Project",
    description:
      "A privacy-first, browser-based auditing tool that scans a local codebase directory and flags security, code-quality, and maintenance issues — entirely client-side, with no files ever uploaded to a server.",
    stack: ["Cybersecurity", "Source Code Analysis"],
  },
];

export default function Projects() {
  return (
    <section id="work" className="relative px-6 md:px-16 max-w-5xl mx-auto py-24">
      <div className="absolute right-0 top-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
        My <span className="text-purple-400">Work</span>
      </h2>
      <p className="text-gray-400 mb-14">Explore my projects and builds</p>

      <div className="flex flex-col gap-8">
        {projects.map((p) => (
          <div
            key={p.name}
            className="border border-purple-500/15 rounded-2xl p-6 md:p-8 bg-purple-500/5 hover:bg-purple-500/10 hover:border-purple-500/30 transition-all"
          >
            <p className="text-xs uppercase tracking-wide text-purple-300 mb-2">
              {p.tag}
            </p>
            <h3 className="text-xl font-semibold text-white mb-3">{p.name}</h3>
            <p className="text-gray-400 mb-4">{p.description}</p>
            <div className="flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
