import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import Contact from "./pages/Contact";
import Header from "./components/header/Header";
import { Route, Switch } from "react-router-dom";

export default function Container() {
  return (
    <>
      <Header />
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
