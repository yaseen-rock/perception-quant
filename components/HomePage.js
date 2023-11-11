import React from 'react';
import Navbar from './Navbar'; 
import Card from './Card'; 
import styles from '../styles/HomePage.module.css'; 

const HomePage = () => {
  const dummyUsername = 'Yaseen'; 

  return (
    <div className={styles['home-page-container']}>
      <Navbar />
      <div className={styles['home-content']}>
        <div className={styles['welcome-message']}>
          Welcome back, <strong>{dummyUsername}!</strong> What would you like to do?
        </div>
        <div className={styles['search-bar']}>
          <input type="text" placeholder="Search..." />
        </div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Icon-round-Question_mark.svg/1200px-Icon-round-Question_mark.svg.png" alt="Question Mark" className={styles['question-mark-icon']} />
      </div>
      <div className={styles['card-container']}>
        <Card
          title=" Topic Analytics"
          logoSrc="https://www.freeiconspng.com/thumbs/analytic-icon/analytic-icon-10.png" 
          description="Listen to conversations about brands, products industries and campaings"
        />
        <Card
          title="IQ Apps"
          logoSrc="https://static.thenounproject.com/png/4366770-200.png" 
          description="Get instant social intelligence tailored to your specific business needs and spread it throughout the enterprise."
        />
        <Card
          title="Dashboards"
          logoSrc="https://cdn-icons-png.flaticon.com/512/4882/4882406.png" 
          description="Build custom dashboards with the KPIs of your choice. Dashboards are comprised of a selection of custom chosen widgets which have been..."
        />
        <Card
          title="Report & Alert"
          logoSrc="https://cdn-icons-png.flaticon.com/512/1242/1242483.png" 
          description="Set up both reports and alerts which can be immediately dispached or set to be scheduled on an automatic basis or when given thresholds are met."
        />
        <Card
          title="Settings"
          logoSrc="https://assets.stickpng.com/images/6002fa9051c2ec00048c6c7a.png" 
          description="Manage the setting of your projects, topic and users."
        />
      </div>
    </div>
  );
};

export default HomePage;
