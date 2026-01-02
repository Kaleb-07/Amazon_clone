import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import Loader from "../Loader/Loader";
import classes from "./Product.module.css";

function Product() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
    {
      isLoading ? (<Loader/>) : (    <section className={classes.products_container}>
      {products.map((singleProduct) => (
        <ProductCard renderAdd={true}
          key={singleProduct.id}
          product={singleProduct}
        />
      ))}
    </section>)
    }
    </>
  );
}

export default Product;
