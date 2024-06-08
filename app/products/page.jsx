import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Product from "@/components/Product";
import React from "react";

async function getProuctions() {
  const res = await fetch(
    `${process.env.API_URL}/api/products`
  );
  const data = await res.json();
  return data.products;
}

// "https://dummyjson.com/products?limit=10&skip=112&select=title,price"
const Productions = async () => {
  const products = await getProuctions();

  return (
    <MaxWidthWrapper>
      <h1>Production</h1>
      {products.length > 0 &&
        products.map(({ id, title, price }) => (
          <Product key={id} title={title} price={price} id={id}/>
        ))}
    </MaxWidthWrapper>
  );
};

export default Productions;
