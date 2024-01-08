// components/PortfolioProjects.tsx
import React from 'react';
import styles from '../styles/projects.module.css';

interface Project {
  name: string;
  image: string;
  link: string;
}

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <div>
       <h2 className={styles.projectsSection}>My Projects</h2>
    <div className={styles.projectsContainer}>
      {projects.map((project, index) => (
        <div key={index} className={styles.projectItem}>
          <div className={styles.projectCard}>
            <img
              src={project.image}
              alt={project.name}
              className={styles.projectImage}
            />
            <div className={styles.projectDetails}>
              <h3 className={styles.projectName}>{project.name}</h3>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
 </div>
  );
};

export default Projects;