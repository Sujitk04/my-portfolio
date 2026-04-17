function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center px-6 bg-[#0f172a] text-white"
    >
      {/* Title */}
      <h2 className="text-4xl font-bold text-sky-400 mb-10">
        My Projects
      </h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">

        {/* Project 1 */}
        <div className="bg-[#111827] p-6 rounded-xl shadow-md hover:scale-105 transition">
          <h3 className="text-xl font-bold text-sky-400 mb-2">
            Employee Salary Prediction (ML)
          </h3>
          <p className="text-gray-300 mb-4">
            Machine Learning project using Python to predict employee salary based on experience and data analysis.
          </p>

          <div className="flex gap-3">
            <a
              href="#"
              className="px-4 py-2 bg-sky-500 rounded-full text-sm hover:bg-sky-600"
            >
              GitHub
            </a>

            <a
              href="#"
              className="px-4 py-2 border border-sky-500 rounded-full text-sm hover:bg-sky-500"
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-[#111827] p-6 rounded-xl shadow-md hover:scale-105 transition">
          <h3 className="text-xl font-bold text-sky-400 mb-2">
            Pinterest Clone (React)
          </h3>
          <p className="text-gray-300 mb-4">
            A frontend project built using React that mimics Pinterest UI with responsive grid layout.
          </p>

          <div className="flex gap-3">
            <a
              href="#"
              className="px-4 py-2 bg-sky-500 rounded-full text-sm hover:bg-sky-600"
            >
              GitHub
            </a>

            <a
              href="#"
              className="px-4 py-2 border border-sky-500 rounded-full text-sm hover:bg-sky-500"
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="bg-[#111827] p-6 rounded-xl shadow-md hover:scale-105 transition">
          <h3 className="text-xl font-bold text-sky-400 mb-2">
            Portfolio Website (This Project 🚀)
          </h3>
          <p className="text-gray-300 mb-4">
            Personal portfolio built using React and Tailwind CSS to showcase skills and projects.
          </p>

          <div className="flex gap-3">
            <a
              href="#"
              className="px-4 py-2 bg-sky-500 rounded-full text-sm hover:bg-sky-600"
            >
              GitHub
            </a>

            <a
              href="#"
              className="px-4 py-2 border border-sky-500 rounded-full text-sm hover:bg-sky-500"
            >
              Live Demo
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;