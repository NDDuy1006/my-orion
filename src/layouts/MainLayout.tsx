import { LayoutProps } from '@/types/layoutType';
import React from 'react';
import Header from './Header';
import header from '../contents/header';

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header {...header} />
      {children}
    </>
  );
};

export default MainLayout;
