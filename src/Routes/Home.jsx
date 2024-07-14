import React from "react";
import { homeBook } from "../assets";
import { useLoaderData } from "react-router-dom";
import Books from "./Books";

export async function loader() {
  const response = await fetch("http://localhost:5000/books");
  const books = await response.json();
  console.log(books);
  return { books };
}

export default function Home() {
  const { books } = useLoaderData();
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

      {/* Books section */}
      <div className="book flex justify-center">
        <div className="container w-[95%] flex flex-col justify-center">
          <div className="grid grid-cols-5 gap-6 text-center">
            {books.map((book) => {
              return <Books key={book._id} book={book} />;
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
