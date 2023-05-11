import MainLayout from '@/layouts/MainLayout';
import { NextSheetWidthLayout } from '@/types/layoutType';
import React, { Fragment, useEffect } from 'react';
import TestPageProps from '@/types/TestPage';
import { GetServerSidePropsContext } from 'next';
import axiosClient from '@/clientApi/axiosClient';

const TestPage: NextSheetWidthLayout = (props: TestPageProps) => {
  const fetcherData = async () => {
    try {
      const data = await axiosClient.get('http://localhost:3000/api/IBE');
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetcherData();
  }, []);
  return <Fragment></Fragment>;
};

TestPage.Layout = MainLayout;

export default TestPage;

export const getStaticProps = async (context: GetServerSidePropsContext) => {
  return {
    props: {},
    revalidate: 60,
  };
};
