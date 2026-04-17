function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center px-6 bg-[#0f172a] text-white"
    >
      {/* Title */}
      <h2 className="text-4xl font-bold text-sky-400 mb-6">
        About Me
      </h2>

      {/* Content Box */}
      <div className="max-w-3xl text-center text-gray-300 leading-relaxed">
        <p className="mb-4">
          Hi 👋 I'm <span className="text-white font-semibold">Suji</span>,
          an MCA Final Year student passionate about building modern web applications.
        </p>

        <p className="mb-4">
          I enjoy working with <span className="text-sky-400">React</span>, 
          <span className="text-sky-400"> Node.js</span>, and 
          <span className="text-sky-400"> Machine Learning</span> projects.
        </p>

        <p>
          My goal is to become a professional Full Stack Developer and get placed in a good IT company 🚀
        </p>
      </div>
    </section>
  );
}

export default About;