import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Category() {
  const [catg, setCatg] = useState([]);

  useEffect(() => {
    axios.get("https://api.escuelajs.co/api/v1/categories").then((res) => {
      console.log(res);
      setCatg(res.data);
    });
  }, []);

  return (
    <div className="flex flex-col  justify-center items-center">
      <h1 className=" mt-22 text-center font-bold text-4xl">Productes</h1>

      <a href="/all_products" className="btn btn-primary text-xl  mt-3.5 ">All products</a>

      <div className="flex flex-wrap gap-5 justify-center mt-3.5 ">
        {catg.map((el) => (
          <div className="card bg-base-100 image-full w-96 shadow-sm">
            <figure>
              <img src={el.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{el.name}</h2>
              <p>{el.slug}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">show moor</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
