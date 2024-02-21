import GithubIcon from "../../images/icons/github.svg";
import UserIcon from "../../images/icons/user.svg";
import EmailIcon from "../../images/icons/mail.svg";
import PhoneIcon from "../../images/icons/phone.svg";
import WordInBackground from "../WordInBackground";

function Contact() {
  return (
    <div className="w-auto h-screen pt-5 relative z-0 flex flex-col mt-10 overflow-hidden">
      <p className="text-center text-5xl font-bold spline-sans flex flex-col gap-y-1">
        CONTACT MOI
        <span className="text-lg ">
          <span className="text-orange-500"> Parlons </span>{" "}
          <span className="text-3xl caveatFont">D'IDÉES</span>
        </span>
      </p>
      <div className="flex flex-row w-full justify-center">
        <div className=" w-1/2 mt-24 ml-24 flex flex-col gap-y-8 ">
          <div className="w-1/2 flex flex-row ">
            <span className="h-14 w-14 rounded-full bg-white p-2 mr-5">
              <img className="h-full w-full" src={GithubIcon} />
            </span>
            <div>
              <p className="text-3xl pb-1"> GITHUB</p>
              <p>github.com/fatehkabbani</p>
            </div>
          </div>
          <div className="w-1/2 flex flex-row">
            <span className="h-14 w-14 rounded-full bg-white p-2 mr-5">
              <img className="h-full w-full" src={UserIcon} />
            </span>
            <div>
              <p className="text-3xl pb-1"> Freelance</p>
              <p>available Right Now</p>
            </div>
          </div>
          <div className="w-1/2 flex flex-row">
            <span className="h-14 w-14 rounded-full bg-white p-2 mr-5">
              <img className="h-full w-full" src={EmailIcon} />
            </span>
            <div>
              <p className="text-3xl pb-1"> Email</p>
              <p>fatehkabbani@zombie223.com</p>
            </div>
          </div>
          <div className="w-1/2 flex flex-row">
            <span className="h-14 w-14 rounded-full bg-white p-2 mr-5">
              <img className="h-full w-full" src={PhoneIcon} />
            </span>
            <div>
              <p className="text-3xl pb-1"> Phone</p>
              <p>+33 7 69 62 57 53</p>
            </div>
          </div>
        </div>
        <div className="w-1/3 flex flex-col mt-24 mr-24">
          <div className="flex flex-row gap-x-2">
            <input
              type="text"
              placeholder="Nom *"
              className="  w-full m-auto p-5 rounded-2xl outline-none ring-black active:ring-1 focus:ring-1"
            />
            <input
              type="text"
              placeholder="Email *"
              className="  w-full m-auto p-5 rounded-2xl outline-none ring-black active:ring-1 focus:ring-1"
            />
          </div>
          <input
            type="text"
            placeholder="Subject *"
            className="  w-full m-auto mt-5 p-5 rounded-2xl outline-none ring-black active:ring-1 focus:ring-1"
          />
          <textarea
            placeholder="Message *"
            className="  w-full m-auto mt-5 p-5 rounded-2xl outline-none ring-black active:ring-1 focus:ring-1"
          >
          </textarea>
          <p className="self-end text-xs my-5 text-stone-400">
            * Accept the therms of service and condition
          </p>
          <button className="self-end w-1/4 p-2 rounded-md outline-none bg-blue-500 text-white active:bg-blue-300 hover:bg-blue-400">
            Envoyer
          </button>
        </div>
        
      </div>
      <WordInBackground word="Contact" left="50" top="70" zIndex="-1" />
    </div>
  );
}

export default Contact;
