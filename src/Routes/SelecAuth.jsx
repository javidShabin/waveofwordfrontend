import React from "react";

export default function SelecAuth({ person }) {
  console.log(person);
  return (
    <>
      <div className="w-[500px] px-4 shadow-lg text-center">
        <img className="rounded-lg mx-auto" src={person.authImg} alt="" />
        <h3 className="font-bold">{person.autherName}</h3>
        <p>{person.description}</p>
      </div>
    </>
  );
}
