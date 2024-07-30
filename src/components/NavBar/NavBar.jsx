import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";
import Header from "../Header/Header";

const NavBar = () => {
  return (
    <nav className={styles.bar}>
      <section className={styles.section}>
        <NavLink className={styles.link} to="/">
          Home
        </NavLink>
        <NavLink className={styles.link} to="/shop">
          Shop
        </NavLink>
      </section>
      <section className={styles.section}>
        <Header />
      </section>
      <section className={styles.section}>
        <NavLink className={styles.link} to="/favorites">
          Favorites
        </NavLink>
        <NavLink className={styles.link} to="/checkout">
          Checkout
        </NavLink>
      </section>
    </nav>
  );
};

export default NavBar;
