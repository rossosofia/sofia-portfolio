import profilePic from '/src/assets/doodle.jpg';
import polaroid from '/src/assets/pola.jpeg';
import propic from '/src/assets/portfolio-pic.png';
import Image from 'next/image';
import styles from './hero.module.css';

const Header = () => {
    return (
      <header className={styles.grid}>
              <div className={styles.container}>
      <h1>Sofia Amoroso</h1>
      <p>
      Hello there!
      <br></br>
      <br></br>
      I am a passionate <strong>multimedia designer</strong>, with a background in <strong>industrial design</strong>.
      <br></br>
      <br></br>
      In my toolbox I have a mix of creativity and technical skills with solid foundations in <strong>graphic design</strong>, <strong>UX/UI</strong> and <strong>front-end development</strong>.
      <br></br>
      <br></br>
      I am a reflective and curious person, deeply in love with visual arts and roller derby.
      <br></br>
      <br></br>
      </p>
      <div>
      <p><strong className={styles.interested}>Do you want to collaborate?</strong><button className={styles.emailbutton}>Email me</button></p>
      </div>
      <br></br>

      </div>
        <Image
        className={styles.img}
        id= "doodle"
        src={propic}
        alt="My Image"
        width={200}
        height={200}
        />

      </header>
    );
  };
  
  export default Header;