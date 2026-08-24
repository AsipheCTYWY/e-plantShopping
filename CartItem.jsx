import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem
} from "../redux/CartSlice";
import { Link } from "react-router-dom";

function CartItem() {
  const cartItems = useSelector(
    state => state.cart.cartItems
  );

  const dispatch = useDispatch();

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h1>Shopping Cart</h1>

      <h2>Total Amount: ${totalAmount}</h2>

      {cartItems.map(item => (
        <div key={item.id}>
          <img src={item.image} alt={item.name} width
          <h3>{item.name}</h3>

          <p>Unit Price: ${item.price}</p>

          <p>
            Total Cost: $
            {item.price * item.quantity}
          </p>

          <button
            onClick={() =>
              dispatch(incrementQuantity(item.id))
            }
          >
            +
          </button>

          <span> {item.quantity} </span>

          <button
            onClick={() =>
              dispatch(decrementQuantity(item.id))
            }
          >
            -
          </button>

          <button
            onClick={() =>
              dispatch(removeItem(item.id))
            }
          >
            Delete
          </button>
        </div>
      ))}

      <button
        onClick={() => alert("Coming Soon")}
      >
        Checkout
      </button>

      <br />
      <br />

      <Link to="/plants">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
}

export default CartItem;
