import React, {useState} from "react";
import { homeBook } from "../assets";
import { useLoaderData } from "react-router-dom";
import Books from "./Books";
import AddFav from "../component/AddFav";

export async function loader() {
  const response = await fetch("http://localhost:5000/books");
  const books = await response.json();
  return { books };
}

export default function Home() {
    const [favorites, setFavorites] = useState([])
  const { books } = useLoaderData();

  const addFavorite = (props) => {
    setFavorites([...favorites, props])
  };

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
      <div className="book w-full flex justify-center">
        <div className="container w-[95%] flex justify-between">
          <div className="box grid grid-cols-4 gap-6">
              {books.map((book) => {
                return (
                  <Books key={book._id} book={book} addFavorite={addFavorite} />
                );
              })}
          </div>
          <div>
            <AddFav favorites={favorites} />
          </div>
        </div>
      </div>
    </main>
  );
}
