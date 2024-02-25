import styles from '@/styles/Home.module.css'
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

  const projects =[
    {
      "id": 5,
      "title": "Copenhagen Roller Derby",
      "description": "Graduation project: Website for my beloved Roller Derby Team",
      "keywords": "Photoshop/Illustrator, HTML, CSS, Javascript",
      "githubLink": "https://github.com/rossosofia/crd_exam",
      "websiteLink": "https://rossosofia.github.io/crd_exam/"

    },

    {
      "id": 4,
      "title": "FooFest Extravaganza",
      "description": "Our final semester project: a lot of flows and forms",
      "keywords": "Next.js - Tailwind - MUI Library ",
      "githubLink": "https://github.com/henrynavntoft/frontend_foofest",
      "websiteLink": "https://frontend-foofest.vercel.app/"
    },

    {
      "id": 3,
      "title": "EDC",
      "description": "School project at KEA made in collaboration with Charlie Tango.",
      "keywords": "Next.js - Supabase",
      "githubLink" : "https://github.com/rossosofia/charlie-tango-case",
      "websiteLink": "https://charlie-tango-case-nu.vercel.app"
    },
  
    {
      "id": 2,
      "title": "Hacking Hogwarts",
      "description": "A students management system for Hogwarts - with some cool easter eggs.",
      "keywords": "HTML - CSS - Javascript",
      "githubLink" : "https://github.com/rossosofia/project-hacking-hogwarts",
      "websiteLink": "https://rossosofia.github.io/project-hacking-hogwarts/"
    },
  
    {
      "id": 1,
      "title": "Piscaria",
      "description": "A click-and-collect game in a Sicilian fish market.",
      "keywords": "HTML - CSS - Javascript",
      "githubLink" : "https://github.com/rossosofia/piscaria-game",
      "websiteLink": "https://rossosofia.github.io/piscaria-game/"
    },
  
    {
      "id": 0,
      "title": "Norrebro Kolonial",
      "description": "A website for a small local store - part of a broader multimedia design project.",
      "keywords": "HTML - CSS - Vanilla Javascript",
      "githubLink" : "https://github.com/rossosofia/kolonial-website",
      "websiteLink": "https://rossosofia.github.io/kolonial-website/"
    }


    
  ]
  
export default function Home() {
  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <main>
    <section id="projects">
  <h2 className={styles.h2}>Projects</h2>
  <div className={styles.grid}>
    {projects.map((project) => (
      <ProjectCard
        key={project.title}
        title={project.title}
        description={project.description}
        keywords={project.keywords}
        githubLink={project.githubLink} 
        websiteLink={project.websiteLink} 
      />
    ))}
  </div>
</section>
    <section id="techstack">
      <h2>
        Tech Stack
      </h2>
      <div className={styles.grid}>
        <div>
        <h3>Comfortable with</h3>
        <ul className={styles.list}>
          <li>HTML</li>
          <li>CSS</li>
          <li>Vanilla Javascript</li>
        </ul>
        </div>
        <div>
        <h3>Currently learning</h3>
        <ul className={styles.list}>
          <li>React</li>
          <li>Next.js</li>
          <li>Tailwind</li>
        </ul>
        </div>
        <div>
        <h3>Plans for the future</h3>
        <ul className={styles.list}>
          <li>Typescript</li>
          <li>React Native</li>
          <li>p5.js</li>
        </ul>
        </div>
      </div>
    </section>
    </main>
    <Footer id="footer"></Footer>
    </>
    )
}