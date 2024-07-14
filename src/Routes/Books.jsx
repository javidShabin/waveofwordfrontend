import React from "react";

export default function Books({ book }) {
  return (
    <main>
      <div className="mt-10 flex flex-col justify-center shadow-xl rounded-2xl">
        <img className="rounded-lg" src={book.bookImg} />
        <h3>{book.bookName}</h3>
      </div>
    </main>
  );
}
