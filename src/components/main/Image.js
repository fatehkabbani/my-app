import React from "react";
import WeirdDot from "../WeirdDot";
import '../../style/app.css';
function Image() {
  return (
    <div className="h-128 w-128 bg-stone-50 ring flex justify-center items-center rounded-full relative">
      {/* <img src={myImage} alt="Fateh" style={{ width:'500px'}}/> */}
      <p className="text-7xl">My Image </p>
      <div className="absolute flex w-42r mt-5 h-3/6 top-1/2 flex-col items-stretch gap-y-4">
        <li className="list-none p-4 gap-y-10 flex justify-start ">
          <p className="text-3xl font-bold flex gap-2 bg-white w-4/12 ring p-4 rounded-full shadow-primary">3 +
          <div className="flex flex-col">
          <span className="text-sm font-bold">YEARS OF </span>
          <span className="text-sm font-bold text-orange-500">EXPERIENCE</span>
          </div>
          </p>
        </li>
        <li className="list-none p-4 gap-y-10 flex justify-end">
          <p className="text-3xl font-bold flex gap-2 bg-white w-4/12 ring p-4 rounded-full shadow-primary">2 +
          <div className="flex flex-col">
          <span className="text-sm font-bold">COMPLETED </span>
          <span className="text-sm font-bold text-orange-500">INTERNSHIP</span>
          </div>
          </p>
        </li>
      </div>
      <WeirdDot imageChoice={true} top="29" left="86" />
      <WeirdDot top="62" left="-25" scale=".5" />
      <WeirdDot top="82" left="100" scale=".5" />
    </div>
  );
}
export default Image;
