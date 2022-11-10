import classes from "./AvailableMeals.module.css";

const fakeMeals = [
    {
        id: 1,
        name: "Kebab na talerzu",
        description: "Mięso, surówka, frytki, sos",
        price: 27
    },
    {
        id: 2,
        name: "Kebab rolo",
        description: "Tortilla, mięso, surówka, sos",
        price: 23
    },
    {
        id: 3,
        name: "Sushi",
        description: "Hosomoak ogórek, California łosoś",
        price: 67
    },
    {
        id: 4,
        name: "Kotlet schabowy",
        description: "Kotlet schabowy (200g), surówka, ziemniaki",
        price: 17
    }
];

const AvailableMeals = () => {
    const mealList = fakeMeals.map((meal) =>(<li>{meal.name}</li>))

    return(
        <section className={classes.meals}>
            <ul>{mealList}</ul>
        </section>
    );
};

export default AvailableMeals;