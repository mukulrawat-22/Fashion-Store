import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"; // Import Link from react-router-dom

import axios from "../utils/axios";
import Loading from "./Loading";

const Details = () => {
  const [product, setproduct] = useState(null);

  const { id } = useParams();
  console.log(id);
  const getsingleproduct = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`);
      setproduct(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getsingleproduct(); // Call the function to fetch the single product data when the component mounts
  }, []);

  return product ? (
    <div className="w-[70%] flex h-full justify-between items-center m-auto p-[10%]">
      <img
        className=" object-contain h-[80%] w-[40%]"
        src={`${product.image}`}
        alt=""
      />
      <div className="content w-[55%]">
        <h1 className="text-4xl">
         {product.title}
        </h1>
        <h3 className="text-zinc-400 my-5">{product.category}</h3>
        <h2 className="text-red-300 mb-3"> ${product.price}</h2>
        <p className="mb-5">
        {product.description}
        </p>
        <Link
          className=" mr-2 py-3 px-5 border rounded border-blue-200 text-blue-300"
          to="/edit"
        >
          Edit
        </Link>{" "}
        {/* Add 'to' attribute */}
        <Link
          className="py-3 px-5 border rounded border-red-200 text-red-300"
          to="/delete"
        >
          Delete
        </Link>{" "}
        {/* Add 'to' attribute */}
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Details;
