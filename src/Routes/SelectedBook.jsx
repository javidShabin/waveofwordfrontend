import React from "react";
import { Link, useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  const response = await fetch(`http://localhost:5000/books/${params.bookId}`);
  const book = await response.json();
  return { book };
}

export default function SelectedBook() {
  const { book } = useLoaderData();
  console.log(book);
  return (
    <>
    <Link to={"/"}><i class="ri-arrow-left-line text-[35px] ml-5 bg-slate-200 rounded-2xl p-1"></i></Link>
      <div className="flex justify-center items-center">
        <div className="w-[80%] shadow-xl mt-4 py-7 px-10 rounded-md ">
          <div className="flex justify-between items-center">
            <img className="rounded-md w-[230px]" src={book.bookImg} alt="" />
            <div>
              <h3 className="text-[50px] font-bold drop-shadow-none">{book.bookName}</h3>
              <h4 className="font-bold">{book.authorName}</h4>
            </div>
          </div>
          <p className="mt-5">{book.paragraph}</p>
        </div>
      </div>
    </>
  );
}
