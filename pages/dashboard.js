import React from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
