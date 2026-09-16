const milestones = [
  {
    year: "2026",
    title: "SIH Hackathon — Nexora",
    tag: "Team Leader",
    description:
      "Leading Team Nexora at Smart India Hackathon (SIH26146), building a rule-based Bitcoin flow monitor under the Cybersecurity domain.",
  },
  {
    year: "2025",
    title: "Cybersecurity Deep Dive",
    tag: "Labs & Coursework",
    description:
      "Working through hands-on cybersecurity labs — SQL injection challenges, web enumeration, and Burp Suite based surface mapping.",
  },
  {
    year: "2024",
    title: "CSE (Cyber Security & IoT + Blockchain)",
    tag: "GVAIET",
    description:
      "Started engineering studies at GV Acharya Institute of Engineering and Technology, specializing in Cyber Security, IoT, and Blockchain Technology.",
  },
];

export default function Timeline() {
  return (
    <section className="relative px-6 md:px-16 max-w-5xl mx-auto py-24">
      <h2 className="text-3xl md:text-5xl font-bold mb-16">
        <span className="text-white">My journey &amp;</span>{" "}
        <span className="text-purple-400">experience</span>
      </h2>

      <div className="relative border-l border-purple-500/20 pl-8 md:pl-12 flex flex-col gap-14">
        {milestones.map((m) => (
          <div key={m.year} className="relative">
            <span className="absolute -left-[41px] md:-left-[57px] top-1 w-3 h-3 rounded-full bg-purple-400 shadow-[0_0_12px_4px_rgba(167,139,250,0.5)]" />
            <p className="text-3xl md:text-4xl font-bold text-gray-500">{m.year}</p>
            <h3 className="text-xl font-semibold text-white mt-2">{m.title}</h3>
            <p className="text-purple-300 text-sm mb-2">{m.tag}</p>
            <p className="text-gray-400 max-w-2xl">{m.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
