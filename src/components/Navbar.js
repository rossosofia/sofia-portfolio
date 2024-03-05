import React, { useState } from "react";
import styles from './navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
    const [isHovered, setIsHovered] = useState(false);
  
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
    return (
        <nav className={styles.nav}>
          <div             onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Scrolling text with email link */}
            <p
            className={`${styles.scrollingText} ${isHovered ? styles.paused : ""}`}
>
            ★ ★ ★ Hey! I'm looking for professional opportunities as a front-end developer. 
              Do you have any? Email me <a href="mailto:your@email.com">HERE</a> ★ ★ ★
            </p>
          </div>
        </nav>
      );
    };
    
    export default Navbar;