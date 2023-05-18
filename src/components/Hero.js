import profilePic from '/src/assets/thousandnights.png';
import Image from 'next/image';
import styles from './hero.module.css';

const Header = () => {
    return (
      <header className={styles.grid}>
        <Image
        className={styles.img}
        src={profilePic}
        alt="My Image"
        width={500}
        height={500}
        />
      <div className={styles.container}>
      <h1>Sofia <br></br>Amoroso</h1>
      <p>I am a multimedia designer specializing in front-end development and currently seeking an internship in this field. Here you will find a selection of my most relevant works showcasing my skills in web design, coding, and user experience.</p>
      </div>
      </header>
    );
  };
  
  export default Header;