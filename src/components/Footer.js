import Link from 'next/link';
import styles from "../styles/Home.module.css"

const Footer = () => {
    return (
        <footer id="footer" className={styles.footer}>
        <h4>Get in Contact!</h4>
        <ul className={styles.listnav}>
        <li>
            <Link href="sofia-amoroso-resume.pdf" target="_blank">
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