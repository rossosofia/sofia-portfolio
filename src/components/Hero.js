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
      Hello there! 👋
      <br></br>
      <br></br>
      I am Sofia, a <strong>multimedia designer</strong> and <strong>front-end developer</strong>, with a background in industrial design.
      <br></br>
      <br></br>
      In my toolbox I have a mix of creativity and technical skills, with solid foundations in design thinking, user research, and visual design.
      <br></br>
      <br></br>
      I am currently diving into the world of web development and user interfaces.
      <br></br>
      <br></br>
      I'm looking for a full time job or an internship opportunity in front-end development. <strong className={styles.interested}>Interested?</strong>
      <br></br>
      <br></br>
      <button className={styles.emailbutton}>Email me</button>
      </p>
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