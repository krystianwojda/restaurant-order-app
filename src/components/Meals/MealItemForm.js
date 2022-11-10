import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
    return(
        <form className={classes.form}>
            <input/>
            <button>Dodaj do koszyka</button>
        </form>
    );
};

export default MealItemForm;