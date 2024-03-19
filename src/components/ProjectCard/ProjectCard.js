import React from "react";
import styles from './Projectcard.module.css'
import Link from 'next/link';

const ProjectCard = ({ title, description, keywords, githubLink, websiteLink }) => {

  return (
      <div className={styles.flex}>
        <div>
          <p className={styles.bold}>{title}</p>
          <p className={styles.desc}>{description}</p>
        </div>

        <div>
        <p className={styles.keyw}>{keywords}</p>
        <div className={styles.flex2}>
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <button className={styles.button}>GitHub</button>
            </a>
          )}
          {websiteLink && (
            <a href={websiteLink} target="_blank" rel="noopener noreferrer">
              <button className={styles.button}>Website</button>
            </a>
          )}
        </div>
        </div>

      </div>
  );
};

export default ProjectCard;