import { useContext, useState } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import Checkout from "../Cart/Checkout";

const Cart = (props) => {
  const [orderClicked, setOrderClicked] = useState(false);
  const cartCtx = useContext(CartContext);
  const [sendBasket, setSendBasket] = useState(false);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const addBasketData = async (basket) => {
    await fetch("http://localhost:8000/basket", {
      method: "POST",
      body: JSON.stringify({
        user: basket,
        items: cartCtx.items,
      }),
    });
    setSendBasket(true);
    // cartCtx.clearItem();
  };

  const orderClickHandler = () => setOrderClicked(true);

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const actionsContent = () => {
    return (
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && (
          <button className={classes.button} onClick={orderClickHandler}>
            Order
          </button>
        )}
      </div>
    );
  };

  const orderContent = () => {
    return (
      <>
        {cartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        {orderClicked && (
          <Checkout onCancel={props.onClose} confirm={addBasketData} />
        )}
        {!orderClicked && actionsContent()}
      </>
    );
  };

  const successForm = <p>ok</p>;

  return (
    <Modal onClose={props.onClose}>
      {sendBasket && successForm}
      {!sendBasket && orderContent()}
      {sendBasket && (
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={props.onClose}>
            Close
          </button>
        </div>
      )}
    </Modal>
  );
};

export default Cart;
