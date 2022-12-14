import {useContext} from "react";
import Modal from "../UI/Modal";
import cartContext from "../../store/cart-context";
import CartItem from "./CartItem";

import classes from "./Cart.module.css";

const Cart = (props) => {
    const cartCtx = useContext(cartContext);

    const totalAmount = `zł${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };
    const cartItemAddHandler = (item) => {
        cartCtx.addItem({
            ...item,
            amount: 1
        });
    };


    const cartItem = (
        <ul className={classes['cart-items']}>
        {cartCtx.items.map((item) => (
            <CartItem
                key={item.id}
                name={item.name}
                amount={item.amount}
                price={item.price}
                onAdd={cartItemAddHandler.bind(null, item)}
                onRemove={cartItemRemoveHandler.bind(null, item.id)}/>
        ))}
        </ul>
    );

    return(
        <Modal onClose={props.onClose}>
            {cartItem}
            <div className={classes.total}>
                <span>Kwota do zapłaty</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Zamknij</button>
                {hasItems && <button className={classes.button}>Zamów</button>}
            </div>
        </Modal>
    );
};

export default Cart;