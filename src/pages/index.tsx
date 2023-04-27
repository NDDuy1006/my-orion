
import requesterAxios from '@/clientApi/requester'
import MainLayout from '@/layouts/MainLayout'
import { NextPageWidthLayout } from '@/types/layoutType'
import React from 'react'



const HomePage: NextPageWidthLayout = ({data}: any) => {

  return (
      <div className='container h-[600px]'>
        This is my app
      </div>
  )
}

HomePage.Layout = MainLayout;

export default HomePage

