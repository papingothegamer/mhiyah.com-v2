// components/WorkExperience.tsx
import React from 'react';
import styles from '../styles/workExperience.module.css';

interface WorkExperience {
  jobTitle: string;
  company: string;
  duration: string;
}

interface WorkExperienceProps {
  workExperience: WorkExperience[];
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ workExperience }) => {
  return (
    <div className={styles.workExperienceContainer}>
      <h2>Work Experience</h2>
      <p></p>
      <div className={styles.timeline}>
        {workExperience.map((experience, index) => (
          <div key={index} className={styles.timelineItem}>
            <h3>{experience.jobTitle}</h3>
            <p>{experience.company}</p>
            <p>{experience.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
