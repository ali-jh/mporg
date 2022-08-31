import React from 'react';
import styles from "./Navbar.module.css";
import logo from '../image/logo.png'

const Navbar = () => {
    return (
        <header className={styles.header}>
            <div className={styles.listContainer}>
                <ul className={styles.list}>
                    <li>Home</li>
                    <li>login</li>
                </ul>
            </div>
            <div className={styles.logo}>
                <img className={styles.logo} src={logo} alt="logo"  />
            </div>
        </header>
    );
};

export default Navbar;