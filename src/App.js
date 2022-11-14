import {Fragment} from "react";
import Header from "./components/Layout/Header";
import AvailableMeals from "./components/Meals/AvailableMeals";
import Banner from "./components/Layout/Banner";
import Cart from "./components/Cart/Cart";

function App() {
  return (
      <Fragment>
          <Cart/>
          <Header/>
          <Banner/>
          <main>
              <AvailableMeals/>
          </main>
      </Fragment>
  );
}

export default App;
