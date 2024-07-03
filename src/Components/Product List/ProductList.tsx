import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/index.tsx";

function ProductList({ products }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat( auto-fill, minmax(350px, 1fr) )",
        placeItems: "center",
        gap: "20px",
        textAlign: "center",
        padding: "50px",
      }}
    >
      {products?.map((product) => {
        return <ProductCard product={product} />;
      })}
    </div>
  );
}

export default ProductList;
