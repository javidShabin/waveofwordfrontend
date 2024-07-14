import React from "react";
import { homeBook } from "../assets";

export default function Home() {
  return (
    <main>
      <div className="w-full">
        <img className="w-full" src={homeBook} alt="" />
      </div>
    </main>
  );
}
