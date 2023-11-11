import React from 'react';
import styles from '../styles/LoginForm.module.css';

const LoginForm = () => {
  return (
    <div className={`${styles['page-container']} ${styles['login-form']}`}>
    <div className={styles['login-form']}>
      <div className={styles.logo}>
        <img src="https://www.perceptionandquant.com/logo2.png" alt="Company Logo" />
      </div>
      <div className={styles['welcome-message']}>
        Welcome to Our Platform!
      </div>
      <div className={styles['email-input']}>
        <input type="email" placeholder="Enter your email" />
      </div>
      <div className={styles['login-button']}>
        <button>Login</button>
      </div>
    </div>
    </div>
  );
};

export default LoginForm;
