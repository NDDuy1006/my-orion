import { LayoutProps } from '@/types/layoutType';
import React from 'react';

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <header className="w-ful h-9 bg-teal-200 container">Header</header>

      {children}

      <footer className="w-ful h-9 bg-teal-200 container">Footer</footer>
    </>
  );
};

export default MainLayout;
