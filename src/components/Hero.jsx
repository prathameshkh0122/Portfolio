import avatar from "../assets/avatar.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-16 overflow-hidden pt-24">
      {/* Background glow */}
      <div className="absolute right-0 top-1/3 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute left-1/3 top-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: intro text */}
        <div>
          <p className="text-purple-300 text-lg mb-2">Hello! I'm</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            PRATHAMESH KHAMKAR
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-md">
            Second-year CSE (Cyber Security &amp; IoT, incl. Blockchain)
            student at GVAIET, focused on cybersecurity and web development.
          </p>
        </div>

        {/* Right: avatar with glow */}
        <div className="flex flex-col items-center md:items-end relative">
          <div className="absolute inset-0 m-auto w-64 h-64 bg-purple-500/30 rounded-full blur-[80px] animate-pulse-glow" />
          <img
            src={avatar}
            alt="Prathamesh Khamkar"
            className="relative w-56 h-56 md:w-72 md:h-72 rounded-full object-cover border border-purple-400/30 glow animate-float"
          />
          <div className="relative mt-8 text-center md:text-right">
            <p className="text-purple-300 text-sm">An</p>
            <p className="text-2xl md:text-3xl font-bold text-white">
              CYBERSECURITY
            </p>
            <p className="text-xl md:text-2xl font-bold text-purple-300">
              &amp; WEB ENTHUSIAST
            </p>
          </div>
        </div>
      </div>

      {/* Bottom-right resume link */}
      <a
        href="#"
        className="absolute bottom-8 right-6 md:right-16 text-xs tracking-widest text-gray-400 hover:text-white transition-colors flex items-center gap-2"
      >
        RESUME
      </a>
    </section>
  );
}
