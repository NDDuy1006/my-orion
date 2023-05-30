import { Wrapper } from '@/components';
import { LayoutProps } from '@/types/layoutType';
import React from 'react';
import Header from './Header';
import header from '../contents/header';
import Footer from './Footer';

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header {...header} />
      {children}
      <Footer/>
    </>
  );
};

export default MainLayout;
