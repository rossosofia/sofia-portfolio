import Link from 'next/link';
import styles from "../styles/Home.module.css"

const Footer = () => {
    return (
        <footer id="footer" className={styles.footer}>
        <h3>Get in Contact!</h3>
        <ul className={styles.listnav}>
        <li>
            <Link href="sofia_amoroso_cv.pdf" target="_blank">
              <p>Check my CV</p>
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/sofia-amoroso/" target="_blank">
              <p>Linkedin</p>
            </Link>
          </li>
          <li>
            <Link href="https://github.com/rossosofia" target="_blank">
              <p>GitHub</p>
            </Link>
          </li>
        </ul>
        </footer>
    );
  };
  
  export default Footer;