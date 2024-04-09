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
      In my toolbox I have a mix of <strong>creativity</strong> and <strong>technical skills</strong>, with solid foundations in graphic design, UX/UI and front-end development.
      <br></br>
      <br></br>
      I'm looking for a <strong>job</strong> or an <strong>internship opportunity</strong> in front-end development.
      <br></br>
      <strong className={styles.interested}>Do you have any?</strong>
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