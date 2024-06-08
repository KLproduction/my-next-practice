"use client";

import React from "react";
import { Button, buttonVariants } from "./ui/button";
import { useRouter } from "next/navigation";


const ProductButton = ({ id }) => {
  const router = useRouter()
  const handleClick = () => {
    router.push(`/products/${id}`);
  };
  return <button onClick={handleClick} className={buttonVariants({
    size:"lg"
  })}>Details</button>;
};

export default ProductButton;
