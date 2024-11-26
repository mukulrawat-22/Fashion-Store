import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../utils/Context";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Edit = () => {
  const [products, setproducts] = useContext(ProductContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setproduct] = useState({
    title: "",
    image: "",
    category: "",
    price: "",
    description: "",
  });
       const ChangeHandler = (e) => {
        // console.log(e.target.name, e.target.value);
       
        setproduct({...product, [e.target.name]: e.target.value});
       }

  useEffect(() => {
    setproduct(products.filter((p) => p.id == id)[0])

  }, [id]);

  const AddProductHandler = (e) => {
    e.preventDefault();
    // Add your API call here to add the new product to the database
    // For example: axios.post('/products', { title, image, category, price, description });
    // Then, reset the form state

    if (
      product.title.trim().length < 5 ||
      product.image.trim().length < 5 ||
      product.category.trim().length < 5 ||
      product.price.trim().length < 1 ||
      product.description.trim().length < 5
    ) {
      alert(
        "All fields are required and title should be at least 5 characters long"
      );
      return;
    }
    
    const pi = products.findIndex((p) => p.id == id);
    const copyData = [...products];
    copyData[pi] = {...products[pi], ...product};



    setproducts(copyData);
    localStorage.setItem("products", JSON.stringify(copyData));
    navigate(-1);
    toast.success("Product Edited successfully");
  };
  console.log(products)
  return (
    <form
      onSubmit={AddProductHandler}
      className="flex flex-col items-center p-[5%] w-screen h-screen"
    >
      <h1 className="mb-5 w-1/2 text-3xl">Edit Product</h1>
      <input
        type="url"
        placeholder="image link"
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        name= "image"
        onChange={ChangeHandler}
        value={product && product.image}
      />
      <input
        type="text"
        placeholder="title"
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        name= "title"
        onChange={ChangeHandler}
        value={product && product.title}
      />
      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          placeholder="category"
          className="text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3"
          name= "category"
          onChange={ChangeHandler}
          value={product && product.category}
        />
        <input
          type="number"
          placeholder="price"
          className="text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3"
          name= "price"
          onChange={ChangeHandler}
          value={product && product.price}
        />
      </div>
      <textarea
         name= "description"
         onChange={ChangeHandler}
        placeholder="enter product description here.."
        value={product && product.description}
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        rows="10"
      ></textarea>
      <div className="w-1/2">
        <button className=" py-2 px-5 border rounded border-blue-200  text-blue-300">
          Edit Product
        </button>
      </div>
    </form>
  );
};

export default Edit;
