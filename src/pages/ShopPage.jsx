import React from "react";
import { useParams } from "react-router-dom";

const ShopPage = () => {
  const { shopname } = useParams();

  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-3xl font-bold">
        This is <span className="text-blue-600">{shopname}</span> shop
      </h1>
    </div>
  );
};

export default ShopPage;
