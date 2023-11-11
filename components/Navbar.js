import React, { useState } from 'react';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <img src="https://www.perceptionandquant.com/logo2.png" alt="Company Logo" className={styles.logo} />
      </div>
      <div className={styles.right}>
        <div className={styles.notificationIcon}>
          <i className="fa fa-bell"></i>
        </div>
        <div className={styles.userInfo}>
          <span className={styles.userName}>Yaseen Rock</span>
          <img src="https://www.iceguru.com/wp-content/uploads/2017/04/avatar-round-1.png" alt="User Avatar" className={styles.avatar} />
          <i className={`fa fa-caret-down ${styles.dropdownIcon}`} onClick={toggleProfile}></i>
        </div>
        {isProfileOpen && (
          <div className={styles.profileMenu}>
            <div className={styles.userProfile}>
              <img src="https://www.iceguru.com/wp-content/uploads/2017/04/avatar-round-1.png" alt="User Avatar" className={styles.profileAvatar} />
              <div className={styles.profileInfo}>
                <span className={styles.profileName}>Yaseen</span>
                <span className={styles.profileEmail}>yaseen@example.com</span>
              </div>
              <i className={`fa fa-edit ${styles.editIcon}`}></i>
            </div>
            <hr className={styles.menuDivider} />
            <div className={styles.menuItem}>
              <i className={`fa fa-cogs ${styles.icon}`}></i>
              Manage Your Admin Account
            </div>
            <div className={styles.menuItem}>
              <i className={`fa fa-user ${styles.icon}`}></i>
              Other Profile
            </div>
            <div className={styles.menuItem}>
              <i className={`fa fa-users ${styles.icon}`}></i>
              Guest
            </div>
            <div className={styles.menuItem}>
              <i className={`fa fa-user-plus ${styles.icon}`}></i>
              Add User
            </div>
            <hr className={styles.menuDivider} />
            <div className={styles.logoutButton}>
              Logout
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
