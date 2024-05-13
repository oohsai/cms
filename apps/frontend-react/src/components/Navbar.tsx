import React from "react";
import { FaBox } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="grid grid-cols-6 bg-[#FAFBFC]">
      <div className="flex items-center font-bold p-5 border ">
        <div>
          <FaBox />
        </div>
        <div className="pl-2">Headless CMS</div>
      </div>
      <div className="items-end col-span-5 justify-center ">
        <div className="flex items-center font-bold border p-5 pl-6">
          Entities
        </div>
      </div>
    </div>
  );
}
