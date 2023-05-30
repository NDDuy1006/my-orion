import { NextSheetWidthLayout } from '@/types/layoutType';
import React from 'react';
import { GetStaticPropsContext } from 'next';
import { Wrapper } from '@/components';
import Image from 'next/image';
import BookingLayout from '@/layouts/BookingLayout';
import BookingStep from '@/components/global/BookingStep';
import Recommended from '@/components/ResultItem/partials/Recommended';
import axios from 'axios';
import dynamic from 'next/dynamic';
import ScrollToTop from '@/components/global/ScrollTop';
import RoomCard from '@/components/Room/partials/RoomCard';
import ImageBox from '@/components/Room/partials/ImageBox';
import { Avatar, Typography, Rate } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import ServiceBadge from '@/components/Room/partials/ServiceBadge';
import PriceBadge from '@/components/Room/partials/PriceBadge';
import { AcademicCapIcon } from '@heroicons/react/24/solid';
const Rooms = dynamic(() => import('@/components/ResultItem/partials/RoomItem'));

const { Title, Paragraph, Text, Link } = Typography;

const dataCheckBox = [
  {
    title: 'Amenities',
    content: [
      { label: '24hr front desk', value: 'title1' },
      { label: 'Adults only', value: 'title2' },
      { label: 'Aire-conditioned', value: 'title3' },
      { label: 'Beachfront', value: 'title4' },
      { label: 'Business center', value: 'title5' },
      { label: 'label title 6', value: 'title6' },
      { label: 'label title 7', value: 'title7' },
      { label: 'label title 8', value: 'title8' },
    ],
  },
  {
    title: 'Bed type',
    content: [
      { label: 'Queen', value: 'title1' },
      { label: 'Double', value: 'title2' },
      { label: 'King', value: 'title3' },
      { label: 'Single/Twin', value: 'title4' },
      { label: 'Bunk bed', value: 'title5' },
      { label: 'label title 6', value: 'title6' },
      { label: 'label title 7', value: 'title7' },
      { label: 'label title 8', value: 'title8' },
      { label: 'label title 9', value: 'title9' },
      { label: 'label title 10', value: 'title10' },
    ],
  },
  {
    title: 'Style',
    content: [],
  },
  {
    title: 'Other',
    content: [],
  },
];

const stepData = [
  {
    step: 1,
    stepName: 'Room and rate',
  },
  {
    step: 2,
    stepName: 'Extra Services',
  },
  {
    step: 3,
    stepName: 'Personal Information',
  },
  {
    step: 4,
    stepName: 'Payment',
  },
  {
    step: 5,
    stepName: 'Comfirmation',
  },
];

const RoomsPage: NextSheetWidthLayout = ({ data }: any) => {
  return (
    <>
      <BookingStep data={stepData} activeStep={2} className="mt-20" />
      <Wrapper>
        <ScrollToTop />
        <div className="grid grid-cols-12 gap-16 mt-10">
          <div className="col-span-8 pr-5">
            {/* <div>
              <Image
                className="w-full h-full mt-4"
                src={require('@/assets/banner-1.png')}
                alt="banner-hotel"
                width={0}
                height={0}
              />
            </div> */}
            <RoomCard
              media={<ImageBox />}
              overview={
                <div className="flex flex-col gap-8">
                  <div className="flex flex-row justify-between">
                    <p>hello</p>
                  </div>
                  <div className="flex flex-row gap-4 p-2">
                    <Avatar size={60} icon={<UserOutlined />} />
                    <div className="flex flex-col">
                      <Text>John Wick</Text>
                      <Text type="secondary">Ant Design (secondary)</Text>
                      <Rate value={3} />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <ServiceBadge className="flex flex-row justify-start gap-2">
                      <AcademicCapIcon style={{ height: 24 }} />
                      <Text>something text</Text>
                    </ServiceBadge>
                    <ServiceBadge className="flex flex-row justify-start gap-2">
                      <AcademicCapIcon style={{ height: 24 }} />
                      <Text>something text</Text>
                    </ServiceBadge>
                    <ServiceBadge className="flex flex-row justify-start gap-2">
                      <AcademicCapIcon style={{ height: 24 }} />
                      <Text>something text</Text>
                    </ServiceBadge>
                    <PriceBadge className="flex flex-row justify-between gap-2 items-center p-6">
                      <div className="flex flex-row justify-start gap-2">
                        <AcademicCapIcon style={{ height: 18 }} />
                        <Text>something text</Text>
                      </div>
                      <Title className="mb-0" level={4}>
                        380
                      </Title>
                    </PriceBadge>
                  </div>
                </div>
              }
              detail={'hello'}
            />
          </div>

          <div className="col-span-4">
            {/* <Recommended /> */}
            {/* {data?.data?.map((ele: any, index: any) => {
              return <Rooms key={index} data={ele} />;
            })} */}
          </div>
        </div>
      </Wrapper>
    </>
  );
};

RoomsPage.Layout = BookingLayout;

export default RoomsPage;

export const getStaticProps = async (context: GetStaticPropsContext) => {
  try {
    const res = await axios.get('http://localhost:3000/api/rooms/VIE', {
      params: {
        page: 1,
        perPage: 10,
      },
    });

    return {
      props: {
        data: res.data,
      },
      revalidate: 60,
    };
  } catch (err) {
    return {
      props: {
        data: [],
      },
      revalidate: 0,
    };
  }
};
