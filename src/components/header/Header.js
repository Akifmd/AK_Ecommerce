import React, { useState } from "react";
import styles from "./Header.module.scss";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";


const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "");

const logo = (
  <div className={styles.logo}>
    <Link to="/">
      {" "}
      <h2>
        e<span>Commerce</span>.
      </h2>
    </Link>
  </div>
);

const cart = (
  <span className={styles.cart}>
    <NavLink to="/cart" className={activeLink}>
      {" "}
      Cart
      <FaShoppingCart size={25} />
     
    </NavLink>
  </span>
);

 export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const hideMenu = () => {
    setShowMenu(false);
  };

  return (
    <header>
      <div className={styles.header}>
        {logo}

        <nav
          className={
            showMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`
          }
        >
          <div
            className={
              showMenu
                ? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}`
                : `${styles["nav-wrapper"]}`
            }
            onClick={hideMenu}
          ></div>
          <ul onClick={hideMenu}>
            <li className={styles["logo-mobile"]}>
              {logo} <FaTimes size={20} onClick={hideMenu} />
            </li>
            <li>
              <NavLink to="/" className={activeLink}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={activeLink}>
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className={styles["header-right"]}>{cart} </div>
        </nav>
        <div className={styles["menu-icon"]}>
          
          {cart}
         
          <HiOutlineMenuAlt3 size={25} onClick={toggleMenu} />
        </div>
      </div>
    </header>
  );
};
