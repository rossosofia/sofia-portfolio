import React from "react";
import styles from '@/styles/Home.module.css'

export default function Navbar(){
    return (
        <nav className={styles.nav} >
            <h3>Hello!</h3>
            <ul className={styles.listnav}>
                <li> <a href="#projects">Projects</a></li>
            </ul>
        </nav>
    )
}