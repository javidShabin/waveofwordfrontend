import React from "react";
import { useLoaderData } from "react-router-dom";
import SelecAuth from "./SelecAuth";

export async function loader() {
  const response = await fetch(`http://localhost:5000/authers`);
  const authors = await response.json();
  return { authors };
}

export default function Authors() {
  const { authors } = useLoaderData();
  return (
    <div>
      {authors.map(person => {
        return <SelecAuth key={person._id} person={person}/>
      })}
    </div>
  );
}
