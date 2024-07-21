import React from "react";
import { useLoaderData } from "react-router-dom";

export async function loader() {
  const response = await fetch(`http://localhost:5000/authers`);
  const auther = await response.json();
  return { auther };
}

export default function Authors() {
  const { author } = useLoaderData();
  return <div></div>;
}
