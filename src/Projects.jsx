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

        {/* 🔥 Project 1 - FEATURED */}
       <div className="bg-[#111827] p-6 rounded-xl shadow-lg hover:scale-105 transition border border-sky-500">
  
  <h3 className="text-xl font-bold text-sky-400 mb-2">
    💼 AI Salary Prediction System
  </h3>

  <p className="text-gray-300 mb-4">
    A full-stack machine learning web application that predicts salary based on 
    experience, education, job role, and location using a trained Random Forest model. 
    This project is fully deployed and working online.
  </p>

  <p className="text-sm text-gray-500 mb-4">
    Tech: React, Tailwind CSS, Flask, Scikit-learn
  </p>

  <div className="flex gap-3 flex-wrap">
{/* 🔗 Live Demo */}
<a
  href="https://salary-predictor-xi.vercel.app"
  target="_blank"
  rel="noopener noreferrer"
  className="px-4 py-2 bg-sky-500 rounded-full text-sm hover:bg-sky-600 transition"
>
  🚀 Live Demo
</a>

    {/* 💻 GitHub Repo */}
    <a
      href="https://github.com/Sujitk04/salary-predictor"
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 border border-sky-500 rounded-full text-sm hover:bg-sky-500"
    >
      💻 View Code
    </a>

  </div>
</div>
        {/* Project 2 */}
        <div className="bg-[#111827] p-6 rounded-xl shadow-md hover:scale-105 transition">
          <h3 className="text-xl font-bold text-sky-400 mb-2">
            📌 Pinterest Clone (React)
          </h3>

          <p className="text-gray-300 mb-4">
            Built a responsive Pinterest-style UI using React with grid layout and modern design principles.
          </p>

          <p className="text-sm text-gray-500 mb-4">
            Tech: React, CSS Grid
          </p>

          <div className="flex gap-3">
            <a
              href="https://github.com/Sujitk04"
              target="_blank"
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
            🌐 Portfolio Website
          </h3>

          <p className="text-gray-300 mb-4">
            Designed and developed a personal portfolio using React and Tailwind CSS to showcase projects and skills.
          </p>

          <p className="text-sm text-gray-500 mb-4">
            Tech: React, Tailwind CSS
          </p>

          <div className="flex gap-3">
            <a
              href="https://github.com/Sujitk04"
              target="_blank"
              className="px-4 py-2 bg-sky-500 rounded-full text-sm hover:bg-sky-600"
            >
              GitHub
            </a>

            <a
              href="https://my-portfolio-tau-lovat-58.vercel.app/"
              target="_blank"
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