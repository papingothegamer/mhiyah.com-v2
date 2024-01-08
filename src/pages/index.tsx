import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import DesignTools from '../components/DesignTools'; 
import WorkExperience from '../components/WorkExperience'; 
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {

  const designToolsData = [
    { name: 'Tool 1', logo: 'img/tool1.png' },
    { name: 'Tool 2', logo: 'img/tool2.png' },
    { name: 'Tool 3', logo: 'img/tool3.png' }
  ];

  const workExperienceData = [
    { jobTitle: 'Job 1', company: 'Company 1', duration: 'Jan 2020 - Dec 2021' },
    { jobTitle: 'Job 2', company: 'Company 2', duration: 'Feb 2022 - Present' },
    
  ];

  return (
    <div>
      <Navbar />
      <Header headerText="UI/UX Designer" imageUrl="img/" />
      <DesignTools designTools={designToolsData} />
      <WorkExperience workExperience={workExperienceData} />
      <Projects
        projects={[
          { name: 'Project 1', image: 'img/1.png', link: 'https://project1.com' },
          { name: 'Project 2', image: 'img/2.png', link: 'https://project2.com' },
          { name: 'Project 3', image: 'img/3.png', link: 'https://project3.com' },
        ]}
      />
      <Footer />
    </div>
  );
};

const renderApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <HomePage />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

if (typeof window !== 'undefined') {
  renderApp();
}

export default HomePage;