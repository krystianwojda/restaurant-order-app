import {useRef, useState} from "react";

import classes from "./MealItemForm.module.css";
import Input from "../UI/Input";

const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const entredAmount = amountInputRef.current.value;
        const entredAmountNumber = +entredAmount;

        if (entredAmount.trim().length === 0 || entredAmountNumber < 1 || entredAmountNumber > 5) {
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(entredAmountNumber);
    };

    return(
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label="szt:"
                input={{
                    id: "amount",
                    type: "number",
                    min: "1",
                    max: "5",
                    step: "1",
                    defaultValue: "1"
                }}
            />
            <button>Dodaj do koszyka</button>
            {!amountIsValid && <p>Proszę podać wartość od 1 do 5.</p>}
        </form>
    );
};

export default MealItemForm;