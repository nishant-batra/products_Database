import React from "react";
import CartItem from "./CartItem";
const Cart = (props) => {
  const { products } = props;
  return (
    <div className="cart">
      {products.map((product) => {
        return (
          <CartItem
            product={product}
            key={product.key}
            onIncQty={props.onIncQty}
            onDecQty={props.onDecQty}
            onDelete={props.onDelete}
            availableProducts={props.availableProducts}
          ></CartItem>
        );
      })}
    </div>
  );
};

export default Cart;
