import ServiceCard from "./ServiceCard";
import WordInBackground from "../WordInBackground";
function ProjectSection() {
  return (
    <div
      style={{
        backgroundColor: "transparent",
        backgroundImage: "linear-gradient(180deg, #FFFFFF 0%, #F0EBE3 100%)",
        width: "auto",
        height: "100vh",
        paddingTop: "20px",
        position: "relative",
        zIndex: 0,
      }}
    >
      <div className="w-5/6 m-auto flex flex-col">
        <p className="text-center text-5xl font-bold spline-sans flex flex-col gap-y-1">
          CE QUE JE FAIS
          <span className="text-lg ">
            <span className="text-orange-500">Mes </span>{" "}
            <span className="text-2xl caveatFont">SERVICES</span>
          </span>
        </p>
        <div className=" mt-12 flex flex-row justify-center lg:flex-col lg:m-auto lg:mb-10">
          <ServiceCard
            jobTitle="DÉVELOPPEMENT WEB"
            title="Full-Stack Web Développeur"
            description=" Création de sites web réactifs à l'aide de  PHP, HTML, CSS, JavaScript et JQuery  . Maîtrise de MySQL pour la gestion des bases de données.
                      "
          />
          <ServiceCard
            jobTitle="UI/UX DESIGN"
            title="UI/UX Designer"
            description="UI / UX en utilisant Figma. Expérience approfondie dans la création de site-web."
          />
          <ServiceCard
            jobTitle="DATABASE MANAGEMENT"
            title="Data Architect"
            description="Proficient in managing and optimizing database systems, including designing efficient database schemas and establishing relationships between different data entities. "
          />
          <WordInBackground word="Services" left="50" top="70"  zIndex="-1"/>
        </div>
      </div>
    </div>
  );
}
export default ProjectSection;
