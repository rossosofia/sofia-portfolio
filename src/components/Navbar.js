import React from "react";
import styles from '@/styles/Home.module.css'
import Link from 'next/link';

export default function Navbar(){
    return (
        <nav className={styles.nav} >
            <h3>Hello!</h3>
            <ul className={styles.listnav}>
                <li>
            <Link href="sofia_amoroso_cv.pdf" target="_blank">
              <p>Check my CV</p>
            </Link>
          </li>
                <li> <a href="#projects">Projects</a></li>
            </ul>
        </nav>
    )
}