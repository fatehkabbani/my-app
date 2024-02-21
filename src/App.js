import { useState, useEffect } from "react";
import Navbar from "./components/header/Navbar";
import HeroSection from "./components/main/HeroSection";
import "./style/app.css";
import ProjectSection from "./components/Project/ProjectSection";
import SkillSection from "./components/skill/SkillSection";
import Contact from "./components/contact/Contact";

// import Cursor from "./components/Cursor";
function App() {
  document.addEventListener(
    "mousedown",
    function (event) {
      (window.getSelection
        ? window.getSelection()
        : document.selection
      ).empty();
      if (event.detail > 1) {
        event.preventDefault();
      }
    },
    false
  );

  return (
    <div>
      {/* <useMousePosition /> */}
      {/* <div className="fade-out-div flex justify-center items-center flex-col gap-y-1">
        <div className="my-name text-xl">Fateh</div>
        <div className="loader"></div>
      </div> */}
      <Navbar />
      <HeroSection />
      <ProjectSection />
      <SkillSection />
      <Contact />
    </div>
  );
}

export default App;
