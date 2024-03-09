import React from "react";
import { price } from "../../dummydata";

const PriceCard = () => {
  return (
    <>
      {price.map((val) => (
        <div className="price items shadow p-10 text-center" key={val.id}>
          <h4>{val.name}</h4>
          <h1 className="text-4xl  mt-5 mb-3 text-teal-500">
            <span className="text-base mr-1">$</span>
            {val.price}
          </h1>
          <p className="text-gray-500 mb-10">{val.desc}</p>
          <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
            GET STARTED
          </button>
        </div>
      ))}
    </>
  );
};

export default PriceCard;
