import Home from "./Pages/Home";
import Favourites from "./Pages/Favourites";
import Contact from "./Pages/Contact";
import { Route, Switch } from "react-router-dom";

export default function Container() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/favourites">
          <Favourites />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </>
  );
}
