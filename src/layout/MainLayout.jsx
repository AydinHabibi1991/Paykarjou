import React from 'react';
import Navbar from '@/components/Navbar';

const MainLayout = ({ children }) => {
  const { props } = children;

  return (
    <div className="bg-secondary w-full min-h-screen">
      <div className="z-50">
        <Navbar social={props.social} />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default MainLayout;
