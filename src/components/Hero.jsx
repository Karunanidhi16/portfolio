

import { Github, Linkedin, Mail, Download, Code2 } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id = "hero" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4">
      <div className="max-w-4xl w-full text-center">

     
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
           
            </div>
            <div className="absolute inset-0 rounded-full border-4 border-blue-500/20 animate-pulse"></div>
          </div>
        </div>

    
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
       Karunanidhi Sharma
        </h1>

   
        <div className="flex items-center justify-center gap-2 mb-6">
          <Code2 className="text-blue-400" size={24} />
          <h2 className="text-2xl md:text-3xl text-blue-400 font-semibold">
            Full Stack Developer
          </h2>
        </div>

     
        <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Passionate about crafting elegant solutions to complex problems.
          Building modern web applications with React, Node.js, and MongoDB.
        </p>

    
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => scrollToSection("projects")}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            View Projects
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-semibold transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Contact Me
          </button>

          <a
            href="public/resume.pdf"
            download
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg font-semibold transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2"
          >
            <Download size={20} />
            Resume
          </a>
        </div>

    
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/Karunanidhisharma16"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition transform hover:scale-110"
            aria-label="GitHub Profile"
          >
            <Github size={28} />
          </a>

          <a
            href="https://www.linkedin.com/in/karunanidhi-sharma-154465323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition transform hover:scale-110"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={28} />
          </a>

          <a
            href="mailto:karunanidhisharma89@gmail.com"
            className="text-gray-400 hover:text-red-400 transition transform hover:scale-110"
            aria-label="Email"
          >
            <Mail size={28} />
          </a>
        </div>

       
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-gray-400 rounded-full mt-2"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
