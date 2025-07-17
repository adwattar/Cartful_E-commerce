import axios from "axios";
import  { useEffect, useState } from "react";

export default function Allprod() {
  const [pro, setPro] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((res) => {
        console.log(res.data);              setPro(res.data);           
      });
  }, []);

  return (
    <div>
      <h1 className=" mt-22 text-center font-bold text-4xl">All Productes</h1>
    <div className="flex flex-wrap pt-22 justify-center gap-6 p-4">
      {pro.map((el) => (
        <div key={el.id} className="card bg-base-100 w-80 shadow-sm">
          <figure>
            <img
              src={el.images?.[0] || "https://via.placeholder.com/300"}
              alt={el.title}
              className="h-60 w-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{el.title}</h2>
            <p className="text-sm text-gray-600 line-clamp-2">
              {el.description}
            </p>
            <div className="card-actions justify-between items-center mt-2">
              <span className="font-semibold text-lg text-green-600">
                ${el.price}
              </span>
              <button className="btn btn-primary btn-sm">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
</div>    </div>
  );
}
