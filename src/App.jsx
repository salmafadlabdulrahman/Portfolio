import "./App.css";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";


//import { useRef } from 'react';


function App() {
  /*const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };*/

  return (
    <>
      <NavBar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
