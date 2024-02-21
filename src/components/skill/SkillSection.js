import SkillProgress from "./SkillProgress";
function SkillSection() {
  return (
    <div className="w-auto h-screen relative z-0">
      <p className="text-center text-5xl font-bold spline-sans flex flex-col gap-y-1">
        PROFESSIONAL SKILLS
        <span className="text-lg ">
          <span className="text-orange-500">Mon </span>{" "}
          <span className="text-2xl caveatFont">Talent</span>
        </span>
      </p>
      <div className="mt-24 flex flex-col justify-center ">
        <div className="flex flex-row w-full justify-center">
          <SkillProgress
            skill="PHP"
            progress="75"
            description="PHP is a server-side scripting language commonly used for web development. I've worked on several projects utilizing PHP for backend functionality."
          />
          <SkillProgress
            skill="React"
            progress="65"
            description="React is a JavaScript library for building user interfaces. I've developed multiple websites using React, and I'm proficient in its concepts and features."
          />
          <SkillProgress
            skill="jQuery"
            progress="75"
            description="jQuery is a fast, small, and feature-rich JavaScript library. I have hands-on experience using jQuery for front-end development."
          />
        </div>
        <div className="flex flex-row w-full justify-center">
          <SkillProgress
            skill="JavaScript"
            progress="90"
            description="JavaScript is a versatile programming language commonly used for web development. I've used JavaScript extensively for client-side scripting and building interactive web elements."
          />
          <SkillProgress
            skill="MySQL"
            progress="75"
            description="MySQL is an open-source relational database management system. I've worked with MySQL databases in various projects, handling data storage and retrieval efficiently."
          />
          <SkillProgress
            skill="Figma"
            progress="90"
            description="Figma is a collaborative interface design tool. I've used Figma for creating landing page, prototypes, and UI designs, collaborating with team members to iterate and refine designs effectively."
          />
        </div>
      </div>
    </div>
  );
}
export default SkillSection;
