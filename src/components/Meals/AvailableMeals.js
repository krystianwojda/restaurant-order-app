import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem";

const fakeMeals = [
    {
        id: 1,
        name: "Kebab na talerzu",
        description: "Mięso, surówka, frytki, sos",
        price: 27
    },
    {
        id: 2,
        name: "Kebab na talerzu",
        description: "Mięso, surówka, frytki, sos",
        price: 23
    },
    {
        id: 3,
        name: "Kebab na talerzu",
        description: "Mięso, surówka, frytki, sos",
        price: 67
    },
    {
        id: 4,
        name: "Kebab na talerzu",
        description: "Mięso, surówka, frytki, sos",
        price: 17
    }
];

const AvailableMeals = () => {
    const mealList = fakeMeals.map((meal) =>(
        <Card key={meal.id}>
            <MealItem
                name={meal.name}
                description={meal.description}
                price={meal.price}
            />
        </Card>))

    return(
        <section className={classes.meals}>
            <ul>{mealList}</ul>
        </section>
    );
};

export default AvailableMeals;