import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { clearCart } from "../features/cart/CartSlice";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { amount, total, cartItems } = useSelector((store) => store.cart);

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>買い物かご</h2>
          <h4 className="empty-cart">
            まだ何も入っていません。。。๐·°(৹˃ᗝ˂৹)°·๐
          </h4>
        </header>
      </section>
    );
  } else {
    return (
      <section className="cart">
        <header>
          <h2>買い物かご</h2>
        </header>
        <div>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <footer>
          <hr />
          <div className="cart-total">
            <h4>
              合計 <span>{total}円</span>
            </h4>
          </div>
          <button
            className="btn clear-btn"
            onClick={() => dispatch(clearCart())}
          >
            全削除
          </button>
        </footer>
      </section>
    );
  }
};

export default CartContainer;
