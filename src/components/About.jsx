export default function About() {
  return (
    <section id="about" className="relative px-6 md:px-16 max-w-5xl mx-auto py-24">
      <div className="absolute left-0 top-1/2 w-72 h-72 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <p className="text-purple-300 tracking-widest text-sm mb-6">ABOUT ME</p>
      <p className="text-xl md:text-3xl text-gray-200 leading-relaxed max-w-3xl">
        I'm a second-year CSE student specializing in{" "}
        <span className="text-white font-semibold">
          Cyber Security &amp; IoT, including Blockchain Technology
        </span>{" "}
        at GV Acharya Institute of Engineering and Technology (GVAIET). My
        interests lie in cybersecurity and web development &amp; design. I
        work with the basics of Python and Java, along with HTML and CSS,
        and I'm currently applying that through hackathon projects and
        cybersecurity-focused builds.
      </p>
    </section>
  );
}
