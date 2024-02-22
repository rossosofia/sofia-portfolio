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
      I'm Sofia, a multimedia designer and a <strong>front-end developer.</strong> 
      <br></br>
      <br></br>
      My journey started in Industrial Design, where I gained solid foundations in design thinking and concept development.
      Now, I'm diving into the world of coding with a focus on creating engaging user experiences.
      <br></br>
      <br></br>
      I'm currently looking for a full time job or an internship opportunity in front-end development. <strong className={styles.interested}>Interested?</strong>
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