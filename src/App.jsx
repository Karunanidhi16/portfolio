/*
  APP COMPONENT (Main Container)
 * This is the main file that combines all sections
 */

// IMPORT all components
import Navbar from './components/navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/skills'
import Contact from './components/contact';
const App = () => {
  return (
    <div className="bg-gray-900">
    
     <Navbar/>
      <Hero />
      <Projects />
      <Skills/>
      <Contact/>
 
     
    </div>
  );
};


export default App;