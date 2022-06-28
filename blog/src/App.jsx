import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/intro";
import Portfolio from "./components/portfolio/portfolio";
import Works from "./components/works/works";
import Learning from "./components/testimonials/testimonials";
import Contact from "./components/contact/contact";
import "./App.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Learning />
        <Contact />
      </div>
    </div>
  );
}
export default App;
