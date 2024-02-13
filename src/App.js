import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Name from "./components/Name";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="box-border">
      <Header></Header>
      <Name></Name>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}

export default App;
