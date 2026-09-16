import {
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";

const stack = [
  { name: "Python", icon: <FaPython /> },
  { name: "Java", icon: <FaJava /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "VS Code", icon: <VscVscode /> },
];

export default function TechStack() {
  return (
    <section className="px-6 md:px-16 max-w-5xl mx-auto py-24 text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-14 tracking-wide">
        TECH STACK
      </h2>

      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        {stack.map((t) => (
          <div
            key={t.name}
            className="w-24 h-24 md:w-28 md:h-28 flex flex-col items-center justify-center gap-2 rounded-xl border border-purple-500/20 bg-purple-500/5 hover:bg-purple-500/10 hover:border-purple-500/40 transition-all"
          >
            <span className="text-3xl text-gray-200">{t.icon}</span>
            <span className="text-xs text-gray-400">{t.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
