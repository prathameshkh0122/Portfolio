import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";

const socials = [
  { name: "GitHub", url: "https://github.com/prathameshkh0122" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/prathamesh-khamkar-5392813a3" },
  { name: "X", url: "https://x.com/Prathameshkh922" },
];

const socialIcons = [
  { name: "GitHub", url: "https://github.com/prathameshkh0122", icon: <FaGithub /> },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/prathamesh-khamkar-5392813a3", icon: <FaLinkedin /> },
  { name: "X", url: "https://x.com/Prathameshkh922", icon: <FaXTwitter /> },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative px-6 md:px-16 max-w-5xl mx-auto py-24">
      <div className="absolute left-1/4 bottom-0 w-72 h-72 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <h2 className="text-4xl md:text-6xl font-bold text-white mb-14">
        PRATHAMESH KHAMKAR
      </h2>

      <div className="grid md:grid-cols-3 gap-10 mb-16">
        <div>
          <p className="text-gray-500 text-sm mb-2">Email</p>
          <p className="text-gray-200">prathameshkh0122@gmail.com</p>
        </div>

        <div>
          <p className="text-gray-500 text-sm mb-2">Location</p>
          <p className="text-gray-200">Dombivli, District Thane, India</p>
        </div>

        <div>
          <p className="text-gray-500 text-sm mb-3">Social</p>
          <div className="flex flex-col gap-2">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-purple-300 transition-colors border-b border-transparent hover:border-purple-400 w-fit"
              >
                {s.name} ↗
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="flex md:hidden gap-6 mb-10">
        {socialIcons.map((s) => (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.name}
            className="text-2xl text-gray-400 hover:text-purple-300 transition-colors"
          >
            {s.icon}
          </a>
        ))}
      </div>

      <div className="border-t border-white/10 pt-6 flex justify-between items-center text-sm text-gray-500">
        <p>
          Designed &amp; Developed by{" "}
          <span className="text-purple-300">Prathamesh Khamkar</span>
        </p>
        <p>© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
