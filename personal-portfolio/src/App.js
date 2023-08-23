import Banner from "./components/Banner";
import Skills from "./components/Skills";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import "./App.css";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
