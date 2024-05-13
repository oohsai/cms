import React from "react";
import { GrHomeRounded } from "react-icons/gr";
import { TfiPackage } from "react-icons/tfi";
import { TbUsers } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import MainContent from "./MainContent";

export default function SideBar() {
  return (
    <div className="grid grid-cols-6 min-h-screen">
      <div className="p-5 border bg-[#FAFBFC]">
        <div className="">
          <div className="flex items-center gap-2 mb-3">
            <GrHomeRounded />
            <div className="text-slate-500">Dashbaord</div>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <TfiPackage />
            <div className="text-black font-bold">Entities</div>
          </div>
          <div className="flex items-center gap-2  mb-3">
            <TbUsers />
            <div className="text-slate-500">Users</div>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <IoSettingsOutline />
            <div className="text-slate-500">Settings</div>
          </div>
        </div>
      </div>
      <div className="col-span-5">
        <MainContent />
      </div>
    </div>
  );
}
