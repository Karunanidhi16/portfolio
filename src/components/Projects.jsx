import projectsData from '../data/projectdata';


import ProjectCard from "./ProjectCard.jsx";


function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-gray-800 py-20 px-4">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of my recent works showcasing my skills in web development
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tech={project.tech}
              image={project.image}
              liveLink={project.liveLink}
              githubLink={project.githubLink} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;