import React from "react";

export default function AddFav({ favorites }) {

    const removeItem = () => {
        alert("Removed!")
    }
    
  return (
    <div className="cart bg-white w-[320px] h-[500px] px-2 overflow-hidden mt-5 rounded-md shadow-lg text-center sticky top-0 right-0">
      <div className="mt-3">
        <h2 className="font-bold">FAVORITES</h2>
      </div>
      <div className="scroll-m-9 grid grid-cols-3" >
      {favorites.map((item, index) => (
          <div key={index} className="flex items-center gap-3 mt-2 relative">
            <span onClick={removeItem} className="absolute top-0 right-6 bg-white rounded-md w-[18px] h-[25px] text-black font-bold cursor-pointer">+</span>
            <img src={item.image} alt={item.name} className="w-[80px] rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
}
