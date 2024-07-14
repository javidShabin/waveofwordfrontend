import React from "react";
import { homeBook } from "../assets";

export default function Home() {
  return (
    <main>
      <div className="w-full h-[400px] overflow-hidden relative">
        <img className="h-[500px] w-full" src={homeBook} />
        <div>
          <h1 className="text-white text-[70px] font-[900] absolute top-[100px] left-8 ">
            Find Your <br />
            Books
          </h1>
        </div>
      </div>
    </main>
  );
}
