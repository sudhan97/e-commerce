import React from "react";
import { Image } from "../Image/Image.tsx";
import { add, remove } from "../../store/CartSlice.js";
import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
type ProductCardProps = {
  product: {
    id: number;
    image: string;
    title: string;
    price: number;
    rating: {
      rate: number;
    };
  };
};
function ProductCard(props: ProductCardProps) {
  const { id, image, title, price, rating } = props?.product || {};
  const dispatch = useDispatch();
  const location = useLocation();
  const isCartPage = location?.pathname === "/cart";
  return (
    <div
      style={{
        width: "250px",
        boxShadow: "0 4px 15px rgba(0,0,0,.1)",
        border: "1px solid #f6f6f6",
        borderRadius: "4px",
      }}
    >
      <Image height={200} width={200} src={image} alt="" />
      <div style={{ background: "#fbfbfb" }}>
        <p>{title}</p>
        <div>
          <p>
            <strong>Price</strong> :- ₹{price}
          </p>
        </div>

        <p>Rating :- {Math.round(rating?.rate)}/5</p>
        <button
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "blue",
            color: "white",
            cursor: "pointer",
          }}
          onClick={() =>
            isCartPage ? dispatch(remove(id)) : dispatch(add(props?.product))
          }
        >
          {isCartPage ? "Remove from cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
