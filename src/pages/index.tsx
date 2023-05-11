import MainLayout from '@/layouts/MainLayout';
import { NextPageWidthLayout } from '@/types/layoutType';
import React, { useEffect } from 'react';

const HomePage: NextSheetWidthLayout = (posts: any) => {
  const handleLogin = async () => {
    try {
      const data = await requesterAxios.userLogin({
        taiKhoan: 'admin',
        matKhau: 'admin',
      });

      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleLogin();
  }, []);
  return <div className="container h-[600px]"></div>;
};

HomePage.Layout = MainLayout;

export default HomePage;

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
