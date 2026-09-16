import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";

const socials = [
  { name: "GitHub", url: "https://github.com/prathameshkh0122", icon: <FaGithub /> },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/prathamesh-khamkar-5392813a3", icon: <FaLinkedin /> },
  { name: "X", url: "https://x.com/Prathameshkh922", icon: <FaXTwitter /> },
];

export default function SocialRail() {
  return (
    <div className="fixed left-6 bottom-10 z-40 hidden md:flex flex-col gap-6">
      {socials.map((s) => (
        <a
          key={s.name}
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.name}
          className="text-xl text-gray-400 hover:text-purple-300 transition-colors"
        >
          {s.icon}
        </a>
      ))}
    </div>
  );
}
