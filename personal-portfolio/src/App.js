import Banner from "./components/Banner";
import Skills from "./components/Skills";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import "./App.css";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <ContactForm />
    </div>
  );
}

export default App;
