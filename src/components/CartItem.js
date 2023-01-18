import React from "react";
import { PlusIcon } from "../Heroicons";
import { MinusIcon } from "../Heroicons";
const CartItem = ({ id, title, price, amount }) => {
  return (
    <article className="cart-item">
      <img />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">{price}</h4>
        <button className="remove-btn">削除</button>
      </div>
      <div>
        <button className="amount-btn">
          <PlusIcon />
        </button>
        <p className="amount">{amount}</p>
        <button className="amount-btn">
          <MinusIcon />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
