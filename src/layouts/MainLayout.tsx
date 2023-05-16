import { Wrapper } from '@/components';
import { LayoutProps } from '@/types/layoutType';
import React from 'react';

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Wrapper><header className="w-full h-9 bg-teal-200">Header</header></Wrapper>

      {children}

      <Wrapper><footer className="w-full h-9 bg-teal-200 container">Footer</footer></Wrapper>
    </>
  );
};

export default MainLayout;
