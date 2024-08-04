import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";
import Header from "../Header/Header";


const NavBar = () => {
  return (
 <>
    <nav className={styles.bar}>
      <section className={styles.section_head}>
        <Header />
      </section>
      <section className={styles.section}>
        <NavLink className={styles.link} style={{borderRight:"1px solid"}} to="/">
          Home
        </NavLink>
        <NavLink className={styles.link} to="/shop">
          Shop
        </NavLink>
      </section>
      <section className={styles.section_mid}></section>

      <section className={styles.section}>
        <NavLink className={styles.link} style={{borderRight:"1px solid"}} to="/favorites">
          Favorites
        </NavLink>
        <NavLink className={styles.link} to="/checkout">
          Checkout
        </NavLink>
      </section>
    </nav>
    <div className={styles.cat}></div>
    </>
  );
};

export default NavBar;
