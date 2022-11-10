import classes from "./Banner.module.css";
import foodImage from "../../assets/food.jpg"

const Banner = () => {
    return(
        <div className={classes['main-image']}>
            <img src={foodImage}/>
        </div>
    );
};

export default Banner;