const semesters = [
  { label: "10th — Maharashtra State Board", sgpa: "Passed, 2023" },
  { label: "12th — Maharashtra State Board", sgpa: "Passed, 2025" },
];

const skills = ["Python (basics)", "Java (basics)", "HTML", "CSS", "Cybersecurity Fundamentals"];

export default function Academics() {
  return (
    <section className="px-6 md:px-16 max-w-5xl mx-auto py-16">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-purple-300 tracking-widest text-sm mb-6">SKILLS</p>
          <div className="flex flex-wrap gap-3">
            {skills.map((s) => (
              <span
                key={s}
                className="text-sm px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/5 text-gray-200"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="text-purple-300 tracking-widest text-sm mb-6">EDUCATION</p>
          <div className="flex flex-col gap-3">
            {semesters.map((s) => (
              <div
                key={s.label}
                className="flex justify-between items-center px-5 py-3 rounded-lg border border-purple-500/20 bg-purple-500/5 gap-4"
              >
                <span className="text-gray-300 text-sm">{s.label}</span>
                <span className="text-white font-bold text-sm whitespace-nowrap">{s.sgpa}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
