import React from "react";

export default function AddFav({ favorites }) {
    
  return (
    <div className="cart w-[280px] h-[350px] px-2 overflow-hidden mt-5 rounded-md shadow-lg text-center ">
      <div className="mt-3">
        <h2 className="font-bold">FAVORITES</h2>
      </div>
      <div className="scroll-m-9 grid grid-cols-3" >
      {favorites.map((item, index) => (
          <div key={index} className="flex items-center gap-3 mt-2">
            <img src={item.image} alt={item.name} className="w-[80px] rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
}
