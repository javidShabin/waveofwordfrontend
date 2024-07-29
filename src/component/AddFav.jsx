import React from "react";

export default function AddFav({ favorites }) {
    favorites.map((items) => {
        console.log(items)
      })
  return (
    <div className="cart w-[280px] h-[350px] mt-5 rounded-md shadow-lg text-center ">
      <div className="mt-3">
        <h2 className="font-bold">FAVORITES</h2>
      </div>
      <div>
        
      </div>
    </div>
  );
}
