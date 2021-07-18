import { useState } from "react";
import "./app.scss";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Menu from "./components/menu/Menu";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import TopBar from "./components/topBar/TopBar";
import Works from "./components/works/Works";

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="app">
      <TopBar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
