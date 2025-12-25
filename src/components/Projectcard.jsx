/**
 * ==========================================================================
 * PROJECT CARD COMPONENT (Reusable)
 * ==========================================================================
 */

import { Github } from "lucide-react";

const ProjectCard = ({
  title,
  description,
  tech,
  image,
  liveLink,
  githubLink,
}) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      
      {/* Project Image */}
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Card Content */}
      <div className="p-6">
        
        {/* Project Title */}
        <h3 className="text-2xl font-bold text-white mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 mb-4 leading-relaxed">
          {description}
        </p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((technology, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {/* Live Demo */}
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-center font-semibold transition"
          >
            Live Demo
          </a>

          {/* GitHub */}
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg text-center font-semibold transition flex items-center justify-center gap-2"
          >
            <Github size={18} />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
