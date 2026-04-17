function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center px-6 bg-[#0f172a] text-white"
    >
      {/* Title */}
      <h2 className="text-4xl font-bold text-sky-400 mb-10">
        My Skills
      </h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full">

        {/* Frontend */}
        <div className="bg-[#111827] p-6 rounded-xl shadow-md hover:scale-105 transition">
          <h3 className="text-xl font-bold text-sky-400 mb-3">Frontend</h3>
          <p className="text-gray-300">HTML, CSS, JavaScript, React</p>
        </div>

        {/* Backend */}
        <div className="bg-[#111827] p-6 rounded-xl shadow-md hover:scale-105 transition">
          <h3 className="text-xl font-bold text-sky-400 mb-3">Backend</h3>
          <p className="text-gray-300">Node.js, Express</p>
        </div>

        {/* Database */}
        <div className="bg-[#111827] p-6 rounded-xl shadow-md hover:scale-105 transition">
          <h3 className="text-xl font-bold text-sky-400 mb-3">Database</h3>
          <p className="text-gray-300">MongoDB, MySQL</p>
        </div>

        {/* Machine Learning */}
        <div className="bg-[#111827] p-6 rounded-xl shadow-md hover:scale-105 transition">
          <h3 className="text-xl font-bold text-sky-400 mb-3">Machine Learning</h3>
          <p className="text-gray-300">Python, Pandas, Scikit-learn</p>
        </div>

        {/* Tools */}
        <div className="bg-[#111827] p-6 rounded-xl shadow-md hover:scale-105 transition">
          <h3 className="text-xl font-bold text-sky-400 mb-3">Tools</h3>
          <p className="text-gray-300">Git, GitHub, VS Code</p>
        </div>

        {/* Other */}
        <div className="bg-[#111827] p-6 rounded-xl shadow-md hover:scale-105 transition">
          <h3 className="text-xl font-bold text-sky-400 mb-3">Other</h3>
          <p className="text-gray-300">Problem Solving, Teamwork</p>
        </div>

      </div>
    </section>
  );
}

export default Skills;