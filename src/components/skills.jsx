
import skillsData from '../data/skillsdata';


const SkillBar = ({ name, level }) => {
  return (
    <div className="mb-4">
    
      <div className="flex justify-between mb-2">
        <span className="text-gray-300 font-medium">{name}</span>
        <span className="text-blue-400">{level}%</span>
      </div>
      

      <div className="w-full bg-gray-700 rounded-full h-2.5">
     
        <div 
          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full transition-all duration-1000"
          style={{ width: `${level}%` }}
        >
     
        </div>
      </div>
    </div>
  );
};

const SkillCategory = ({ title, skills }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg">

      <h3 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3">
        {title}
      </h3>

      {skills.map((skill, index) => (
        <SkillBar 
          key={index}
          name={skill.name}
          level={skill.level}
        />
      ))}
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen bg-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 text-lg">
            My technical expertise across the MERN stack and development tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
          <SkillCategory 
            title="Frontend" 
            skills={skillsData.frontend}
          />
       
          <SkillCategory 
            title="Backend" 
            skills={skillsData.backend}
          />
          
      
          <SkillCategory 
            title="Tools & Others" 
            skills={skillsData.tools}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;