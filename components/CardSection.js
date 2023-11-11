import React from 'react';
import Card from './Card'; 
import styles from '../styles/CardSection.module.css'; 

const topics = [
  {
    name: 'AnalyticssaXasZXas',
    description: 'Explore data analytics for insights.',
    color: '#ff7675',
  },
  {
    name: 'IQ Apps',
    description: 'Discover intelligent applications.',
    color: '#74b9ff',
  },
  {
    name: 'Dashboards',
    description: 'View interactive and informative dashboards.',
    color: '#55efc4',
  },
  {
    name: 'Reports',
    description: 'Access detailed reports on your data.',
    color: '#ffeaa7',
  },
  {
    name: 'Alerts Setting',
    description: 'Configure and manage alerts.',
    color: '#fdcb6e',
  },
];

const CardSection = () => {
  return (
    <div className={styles['card-section']}>
      {topics.map((topic, index) => (
        <Card key={index} {...topic} />
      ))}

    </div>
  );
};

export default CardSection;
