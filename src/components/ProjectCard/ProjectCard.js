import React from "react";
import styles from './Projectcard.module.css'
import Link from 'next/link';

const ProjectCard = ({ title, description, keywords, link }) => {

  return (
<Link className={styles.link} href={link} target="_blank"
>
    <article>
      <div className={styles.flex}>
        <p className={styles.bold}>{title}</p>
        <p className={styles.desc}>{description}</p>
        <p className={styles.keyw}>{keywords}</p>
        <div className={styles.flex2}> 
      <button className={styles.button}>GitHub</button>
      <button className={styles.button}>Website</button>
      </div>
      </div>


    </article>
</Link>

  );
};

export default ProjectCard;