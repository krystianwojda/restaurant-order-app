import {Fragment} from "react";
import Header from "./components/Layout/Header";
import AvailableMeals from "./components/Meals/AvailableMeals";
import Banner from "./components/Layout/Banner";

function App() {
  return (
      <Fragment>
          <Header/>
          <Banner/>
          <main>
              <AvailableMeals/>
          </main>
      </Fragment>
  );
}

export default App;
