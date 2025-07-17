import axios from "axios";
import { useEffect, useState } from "react";

export default function Prodcard() {
  const [pro, setPro] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((res) => {setPro(res.data) ; console.log(res)});
  }, []);

  return (
    <div className="flex w-full pt-22 flex-wrap gap-5 items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500" >
        {
            pro.map((el)=>(

      <div className="card  bg-blue-400 w-96 shadow-xl">
        <figure>
          <img
            src={el.images}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{el.title}</h2>

          <div className="card-actions  justify-between">
            <h1 className="text-4xl ">{el.price} $</h1>
            
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
             ) )
        }
    </div>
  );
}
