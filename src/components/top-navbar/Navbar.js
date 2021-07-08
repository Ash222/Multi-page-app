import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";

export default function Navber() {
  return (
    <>
      <h1 className={classes.header}>Navbar</h1>
      <nav className={classes.navbarContainer}>
        <Link className={classes.link} to="/">
          Home
        </Link>
        <Link className={classes.link} to="/favourites">
          Favourites
        </Link>
        <Link className={classes.link} to="/contact">
          Contact
        </Link>
      </nav>
    </>
  );
}
