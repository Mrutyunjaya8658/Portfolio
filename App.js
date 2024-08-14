import Navbar from "./components/navbar";
import Intro from "./components/intro";
import Skill from "./skills/skill";
import Work from "./work/work";
import Contact from "./contact/contact";
import Footer from "./footer/footer";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skill/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
