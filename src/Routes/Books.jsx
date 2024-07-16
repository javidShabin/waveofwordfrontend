import React from "react";

export default function Books({ book }) {
  return (
    <>
      <div className="shadow-2xl w-[300px] h-[450px] rounded-lg px-4 relative">
        <img className="rounded-lg w-[200px] mx-auto mt-5" src={book.bookImg} />
        <div className="mt-4">
          <h2 className="text-red-500 font-semibold">Author: {book.authorName}</h2>
          <h3 className="text-blue-600">Book: {book.bookName}</h3>
        </div>
          <button className="absolute bottom-2 right-5 py-1 px-3 bg-yellow-400 rounded-md font-medium">Add fav</button>
      </div>
    </>
  );
}
