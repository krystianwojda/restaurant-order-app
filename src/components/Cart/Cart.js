import classes from "./Cart.module.css";

const Cart = (props) => {
    const cartItem = <ul className={classes['cart-items']}>{[{id:'c1',name:'Sushi',amount: 2,price: 39.99},].map(item => <li>{item.name}</li>)}</ul>;

    return(
        <div>
            {cartItem}
            <div className={classes.total}>
                <span>Kwota to zapłaty</span>
                <span>39.99</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}>Zamknij</button>
                <button className={classes.button}>Zamów</button>
            </div>
        </div>
    );
};

export default Cart;