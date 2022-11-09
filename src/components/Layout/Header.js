import React from "react";

import classes from "./Header.module.css";

const Header = (props) => {
    return(
        <header className={classes.header}>
            <h1>Logo firmy</h1>
            <button>Koszyk</button>
        </header>
    );
};

export default Header;