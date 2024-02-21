import React from "react";
import AboutMe from "./AboutMe";
import Image from "./Image";
import WordInBackground from "./../WordInBackground";
function HeroSection() {
  return (
    <div className="w-6/6 h-screen mt-24 m-auto  xl:mt-px" style={
      {
        backgroundColor: "transparent",
        backgroundImage: "linear-gradient(0deg, #FFFFFF 0%, #F0EBE3 100%)",
      }
    }>
      <div className="lg:hidden">
      <WordInBackground word="Web Developer" left="50" top="100"  />
      </div>
      <div className="w-5/6 m-auto flex items-start justify-between xl:flex-col xl:justify-center xl:items-center xl:w-full">
      <AboutMe />
      <Image />
      </div>
    </div>
  );
}
export default HeroSection;
