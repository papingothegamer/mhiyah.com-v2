// components/DesignTools.tsx
import React from 'react';
import styles from '../styles/designTools.module.css';

interface DesignTool {
  name: string;
  logo: string;
}

interface DesignToolsProps {
  designTools: DesignTool[];
}

const DesignTools: React.FC<DesignToolsProps> = ({ designTools }) => {
  return (
    <div className={styles.designToolsContainer}>
      <h2>Design Tools</h2>
      <p></p>
      <div className={styles.designToolsCards}>
        {designTools.map((tool, index) => (
          <div key={index} className={styles.designToolCard}>
            <img src={tool.logo} alt={tool.name} />
            <p>{tool.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignTools;
