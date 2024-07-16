import React from "react";

export default function Books({ book, addFaveBook}) {

  return (
    <>
      <div className="shadow-2xl w-[300px] h-[450px] rounded-lg px-4 relative">
        <img className="rounded-lg w-[200px] mx-auto mt-5" src={book.bookImg} />
        <div className="mt-4">
          <h2 className="text-black font-bold">Author: <span className="font-semibold">{book.authorName}</span></h2>
          <h3 className="text-balance font-bold">Book: <span className="font-semibold">{book.bookName}</span></h3>
        </div>
          <button className={`absolute bottom-2 right-5 py-1 px-3
        rounded-md font-medium bg-yellow-400 text-black`}>Add fav</button>
      </div>
    </>
  );
}
