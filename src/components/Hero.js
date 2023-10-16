import profilePic from '/src/assets/doodle.jpg';
import polaroid from '/src/assets/pola.jpeg';
import Image from 'next/image';
import styles from './hero.module.css';

const Header = () => {
    return (
      <header className={styles.grid}>
        <div >
        <Image
        className={styles.img}
        id= "doodle"
        src={profilePic}
        alt="My Image"
        width={200}
        height={200}
        />
        <Image
        className={styles.img}
        id= "pola"
        src={polaroid}
        alt="My Image"
        width={200}
        height={200}
        />

        </div>

      <div className={styles.container}>
      <h1>Sofia Amoroso</h1>
      <p>
      I'm a <strong>front-end developer</strong> about to complete my multimedia design education at KEA. I'm currently looking for a part-time job as a <strong>student helper!</strong>
      <br></br>
      <br></br>
      I have a background in product design and experience in graphic design for advertising.
      <br></br>Here you will find a selection of my most relevant works showcasing my skills in web design, coding, and user experience.
      </p>
      </div>
      </header>
    );
  };
  
  export default Header;