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
          <div
            className={`${styles.scrollingText} ${isHovered ? styles.paused : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Scrolling text with email link */}
            <marquee>
              H! I'm looking for professional opportunities as a front-end developer. 
              Email me <a href="mailto:your@email.com">HERE</a>
            </marquee>
          </div>
        </nav>
      );
    };
    
    export default Navbar;