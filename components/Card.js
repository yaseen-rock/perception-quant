import React from 'react';
import styles from '../styles/Card.module.css';

const Card = ({ title, logoSrc, description }) => {
  const headerColor = getRandomColor();

  return (
    <div className={styles.card}>
      <div className={styles.header} style={{ backgroundColor: headerColor }}>
        <div className={styles.logoContainer}>
          <img src={logoSrc} alt={`${title} Logo`} className={styles.logo} />
        </div>
        <div className={styles['title-container']}>
          <h2 className={styles.title}>{title}</h2>
        </div>
      </div>
      <div className={styles.description}>
        <p>{description}</p>
      </div>
      <div className={styles['button-container']}>
        <button style={{ backgroundColor: 'white', color: headerColor, borderColor: headerColor }}>
         Open {title}
        </button>
      </div>
    </div>
  );
};

function getRandomColor() {
  const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6'];
  return colors[Math.floor(Math.random() * colors.length)];
}

export default Card;
