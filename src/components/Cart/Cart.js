import {useContext} from "react";
import Modal from "../UI/Modal";
import cartContext from "../../store/cart-context";

import classes from "./Cart.module.css";

const Cart = (props) => {
    const cartCtx = useContext(cartContext);

    const totalAmount = `zł${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;


    const cartItem = <ul className={classes['cart-items']}>
        {cartCtx.items.map(item => <li>{item.name}</li>)}</ul>;

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