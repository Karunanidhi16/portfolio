
import Navbar from './components/navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/skills'
import Contact from './components/contact';
import DSA from './components/DSA';
const App = () => {
  return (
    <div className="bg-gray-900">
    
     <Navbar/>
      <Hero />
      <Projects />
      <DSA />
      <Skills/>
     
      <Contact/>
 
     
    </div>
  );
};


export default App;