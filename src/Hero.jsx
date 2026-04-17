function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-16 px-10 bg-[#0f172a]"
    >
      {/* LEFT TEXT */}
      <div className="max-w-xl text-center md:text-left">

        <p className="text-sky-400 tracking-widest animate-pulse">
          WELCOME TO MY PORTFOLIO
        </p>

        <h1 className="text-5xl md:text-6xl font-bold text-white mt-4">
          Hi, I'm <span className="text-sky-400">Suji</span> 👋
        </h1>

        <p className="text-gray-300 mt-4 text-lg">
          MCA Final Year Student | Full Stack Developer | ML Enthusiast
        </p>

        {/* BUTTONS */}
        <div className="mt-6 flex gap-4 justify-center md:justify-start">
          <a
            href="#projects"
            className="bg-sky-500 hover:bg-sky-600 px-6 py-3 rounded-full transition transform hover:scale-105"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-sky-500 hover:bg-sky-500 px-6 py-3 rounded-full transition transform hover:scale-105"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative flex justify-center">

        <img
          src="https://ui-avatars.com/api/?name=Suji+Dev&background=0f172a&color=38bdf8&size=256"
          alt="profile"
          className="w-72 h-72 object-cover rounded-full border-4 border-sky-400 shadow-lg hover:scale-105 transition duration-500"
        />

        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-sky-500 blur-3xl opacity-20 animate-pulse"></div>

      </div>
    </section>
  );
}

export default Hero;