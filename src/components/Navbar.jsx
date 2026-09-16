export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-10 py-6 bg-[#060608]/70 backdrop-blur-sm">
      <div className="text-white font-bold text-lg tracking-wide">PK</div>

      <a
        href="mailto:prathameshkh0122@gmail.com"
        className="hidden md:block text-sm text-gray-300 hover:text-white transition-colors"
      >
        prathameshkh0122@gmail.com
      </a>

      <div className="flex gap-6 md:gap-10 text-xs md:text-sm font-semibold tracking-widest">
        <a href="#about" className="text-white hover:text-purple-300 transition-colors">
          ABOUT
        </a>
        <a href="#work" className="text-white hover:text-purple-300 transition-colors">
          WORK
        </a>
        <a href="#contact" className="text-white hover:text-purple-300 transition-colors">
          CONTACT
        </a>
      </div>
    </nav>
  );
}
