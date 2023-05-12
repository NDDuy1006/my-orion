import requesterAxios from '@/clientApi/requester';
import MainLayout from '@/layouts/MainLayout';
import { NextSheetWidthLayout } from '@/types/layoutType';
import React, { useEffect } from 'react';

const HomePage: NextSheetWidthLayout = (posts: any) => {
 
  return <div className="container h-[600px]"></div>;
};

HomePage.Layout = MainLayout;

export default HomePage;

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
