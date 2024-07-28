import React from "react";
import { Link } from "react-router-dom";

export default function Books({ book, addFavorite }) {
  return (
    <>
      <div
        className="shadow-2xl w-[300px] h-[450px] rounded-lg px-4 relative"
      >
        <Link to={`/books/${book._id}`}><img className="rounded-lg w-[200px] mx-auto mt-5" src={book.bookImg} /></Link>
        <div className="mt-4">
          <h2 className="text-black font-bold">
            Author: <span className="font-semibold">{book.authorName}</span>
          </h2>
          <h3 className="text-balance font-bold">
            Book: <span className="font-semibold">{book.bookName}</span>
          </h3>
        </div>
        <div>
        <button onClick={()=>{addFavorite(book.bookName)}}
          className={`absolute bottom-2 right-5 py-1 px-3
        rounded-md font-medium bg-yellow-400 text-black`}
        >
          Add fav
        </button>
        </div>
      </div>
    </>
  );
}
