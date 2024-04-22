import Image from "next/image";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const { id, name, price, image } = product;
  const [isIncart, toggleCart] = useState(false);

  return (
    <div className="card relative bg-slate-200 p-4 rounded-lg transition-transform transform-glow-hover hover:scale-105 shadow-xl">
      {/* id at left corner */}
      <div className="text-sm mb-2">
        <small className="text-gray-600 text-bold">#{id}</small>
      </div>
      <Image
        className="border border-1 border-black rounded-full"
        src={image}
        alt={name}
        width={200} // Adjust width and height as needed
        height={200}
      />
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <div className="my-2 flex flex-wrap gap-2 justify-center"></div>
      <p>${price}</p>
      {isIncart ? (
        <button className={"RemoveButton"} onClick={() => alert("Remove from cart")}>
          Remove
        </button>
      ) : (
        <button onClick={() => toggleCart(true)}>Add To Cart</button>
      )}
    </div>
  );
};

export default ProductCard;
