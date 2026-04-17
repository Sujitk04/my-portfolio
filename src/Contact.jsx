function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center px-6 bg-[#0f172a] text-white"
    >
      {/* Title */}
      <h2 className="text-4xl font-bold text-sky-400 mb-10">
        Contact Me
      </h2>

      {/* Box */}
      <div className="bg-[#111827] p-8 rounded-xl shadow-md w-full max-w-xl text-center">

        <p className="text-gray-300 mb-6">
          Feel free to reach out for opportunities or collaborations 🚀
        </p>

        {/* Email */}
        <div className="mb-5">
          <h3 className="text-sky-400 font-semibold">Email</h3>
          <p className="text-gray-300">stk45863@gmail.com</p>
        </div>

        {/* GitHub */}
        <div className="mb-5">
          <h3 className="text-sky-400 font-semibold">GitHub</h3>
          <a
            href="https://github.com/Sujitk04"
            target="_blank"
            className="text-gray-300 hover:text-white"
          >
            github.com/Sujitk04
          </a>
        </div>

        {/* LinkedIn */}
        <div className="mb-6">
          <h3 className="text-sky-400 font-semibold">LinkedIn</h3>
          <a
            href="https://www.linkedin.com/in/suji-tk-1086bb298/"
            target="_blank"
            className="text-gray-300 hover:text-white"
          >
            linkedin.com/in/suji-tk
          </a>
        </div>

        {/* Email Button */}
        <a
          href="mailto:stk45863@gmail.com"
          className="inline-block bg-sky-500 hover:bg-sky-600 px-6 py-3 rounded-full font-medium transition"
        >
          Send Email
        </a>

      </div>
    </section>
  );
}

export default Contact;