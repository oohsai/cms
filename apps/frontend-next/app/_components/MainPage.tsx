"use client";
import React from "react";
import { Button } from "../../@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex p-5">
      <div className="flex items-center w-full">👋</div>
      <div className="items-end justify-center ">
        <Button variant="link">
          <Link href={"/"}>Github</Link>
        </Button>
      </div>
    </div>
  );
}
