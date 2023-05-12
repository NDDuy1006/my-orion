
import MainLayout from '@/layouts/MainLayout'
import { NextSheetWidthLayout } from '@/types/layoutType'
import React, { Fragment } from 'react'
import resultPageProps from '@/types/resultPage';
import { GetServerSidePropsContext } from 'next';



const resultPage: NextSheetWidthLayout = (props: resultPageProps) => {
    return (
        <Fragment></Fragment>
    );
}

resultPage.Layout = MainLayout;

export default resultPage;


export const getStaticProps = async (context: GetServerSidePropsContext) =>  {

    return {
        props: {},
        revalidate: 60
    }; 
}
