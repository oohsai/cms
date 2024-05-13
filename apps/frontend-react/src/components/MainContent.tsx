import React from "react";
import { Button } from "./ui/button";

export default function MainContent() {
  return (
    <div className="p-10 flex">
      <div className="flex-1">
        <div className="text-3xl font-semibold ">All Entities</div>
      </div>
      <div className="flex-none">
        <Button className="items-center bg-black text-white">
          Create Entity
        </Button>
      </div>
    </div>
  );
}
