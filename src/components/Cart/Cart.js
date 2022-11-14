import Modal from "../UI/Modal";

import classes from "./Cart.module.css";

const Cart = (props) => {
    const cartItem = <ul className={classes['cart-items']}>{[{id:'c1',name:'Sushi',amount: 2,price: 39.99},].map(item => <li>{item.name}</li>)}</ul>;

    return(
        <Modal onClose={props.onClose}>
            {cartItem}
            <div className={classes.total}>
                <span>Kwota do zapłaty</span>
                <span>39.99</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Zamknij</button>
                <button className={classes.button}>Zamów</button>
            </div>
        </Modal>
    );
};

export default Cart;