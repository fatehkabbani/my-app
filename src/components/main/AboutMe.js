import React from "react";
import "../../style/style.css";
import GithubIcon from '../../images/icons/github.svg';
import LinkedInIcon from '../../images/icons/linkedin.svg';
import MailIcon from '../../images/icons/mail.svg';
import DownloadFile from '../../images/kabbani_fateh_cv.pdf';
function AboutMe() {
  const styleGood = "hover:cursor-pointer transition duration-300 ease-in-out";
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = DownloadFile;
    link.download = 'kabbani_fateh.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="w-1/2 flex flex-col gap-y-5 xl:w-5/6">
      <p className="text-m font-bold tracking-wider select-none">BONJOUR, <span className="text-orange-500">JE M'APPLE</span></p>
      <p className="text-7xl text-white font-bold select-none" style={
        {
           textShadow: "2px 2px #000, -2px 2px #000, 2px -2px #000, -2px -2px #000, 5px 5px 0px rgba(0, 0, 0, 0.2)"
        }
      }><span className="text-orange-500">FA</span>TEH</p>
      <p className="font-bold text-s">
        JE SUIS <span className="caveatFont text-4xl">Développeur Full-stack</span>
      </p>
      <p className="text-stone-500 text-lg break-words xl:break-keep xl:text-base lg:text-sm sm:text-xs">
        Je suis Fateh Développeur Full-stack. Maîtrise PHP, MySql et de
        certaines technologies frontales, Je suis enthousiaste à l'idée de
        collaborer et de créer des expériences numériques exceptionnelles avec
        vous.
      </p>
      <div className="flex gap-x-2 xl:gap-x-1">
      <img src={GithubIcon} className={styleGood} alt="github" />
      <img src={LinkedInIcon} className={styleGood} alt="linked in" />
      <img src={MailIcon} className={styleGood} alt="mail" />
      </div>
      <button className="w-1/4 px-1 py-2 ring-orange-500 ring-1 rounded text-center break-all xl:text-sm lg:text-xs md:p-px" onClick={handleDownload}>Download CV</button>
    </div>
  );
}
export default AboutMe;
