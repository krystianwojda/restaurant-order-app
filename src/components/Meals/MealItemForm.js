import classes from "./MealItemForm.module.css";
import Input from "../UI/Input";

const MealItemForm = (props) => {
    return(
        <form className={classes.form}>
            <Input label={"Ilość"} input={{
                id: "amount",
                type: "number",
                min: "1",
                max: "5",
                step: "1",
                defaultValue: "1"
            }}/>
            <button>Dodaj do koszyka</button>
        </form>
    );
};

export default MealItemForm;