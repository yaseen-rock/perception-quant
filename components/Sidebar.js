// components/Sidebar.js

import React from 'react';
import Link from 'next/link';
import styles from '../styles/Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}> 
        <li>
          <Link href="/dashboard-print">
            <img src="https://cdn-icons-png.flaticon.com/512/6088/6088590.png" alt="Dashboard Print" className={styles.logo} />
            Dashboard Print
          </Link>
        </li>
        <li>
          <Link href="/dashboard-online">
            <img src="https://www.iconbunny.com/icons/media/catalog/product/cache/2/thumbnail/600x/1b89f2fc96fc819c2a7e15c7e545e8a9/6/3/632.1-dashboard-icon-iconbunny.jpg" alt="Dashboard Online" className={styles.logo} />
            Dashboard Online
          </Link>
        </li>
        <li>
          <Link href="/headline-print">
            <img src="https://www.iconbunny.com/icons/media/catalog/product/cache/2/thumbnail/600x/1b89f2fc96fc819c2a7e15c7e545e8a9/6/3/632.1-dashboard-icon-iconbunny.jpg" alt="Headline Print" className={styles.logo} />
            Headline Print
          </Link>
        </li>
        <li>
          <Link href="/headline-online">
            <img src="https://www.iconbunny.com/icons/media/catalog/product/cache/2/thumbnail/600x/1b89f2fc96fc819c2a7e15c7e545e8a9/6/3/632.1-dashboard-icon-iconbunny.jpg" alt="Headline Online" className={styles.logo} />
            Headline Online
          </Link>
        </li>
        <li>
          <Link href="/reports">
            <img src="data:image/png;base64,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" alt="Reports" className={styles.logo} />
            Reports Print & Online
          </Link>
        </li>
    </div>
  );
};

export default Sidebar;
