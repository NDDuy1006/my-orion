import { NextSheetWidthLayout } from '@/types/layoutType';
import React, { useState, useEffect } from 'react';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import { Wrapper } from '@/components';
import BookingLayout from '@/layouts/BookingLayout';
import axios from 'axios';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import LoadingItem from '@/components/global/LoadingItem';
import axiosClient from '@/clientApi/axiosClient';
import FilterBox from '@/components/global/FilterBox';
import {  ForestIcon, LakeIcon, MoutainIcon, WineIcon } from '@/library';
const Alert = dynamic(() => import('@/components/global/Alert'));
const PriceRange = dynamic(() => import('@/components/global/PriceRange'));
const BookingStep = dynamic(() => import('@/components/global/BookingStep'));
const Hotels = dynamic(() => import('@/components/ResultItem/partials/HotelItem'), {
  loading: () => <LoadingItem />,
});

const stepData = [
  {
    step: 1,
    stepName: 'Search',
  },
  {
    step: 2,
    stepName: 'Choose your room',
  },
  {
    step: 3,
    stepName: 'Addons',
  },
  {
    step: 4,
    stepName: 'Payment',
  },
  {
    step: 5,
    stepName: 'Confirmation',
  },
];

const landScape = [
  { label: 'Snow & Mountain', value: 'snow-mountain', icon: <MoutainIcon /> },
  { label: 'Forest', value: 'Forest', icon: <ForestIcon /> },
  { label: 'Lakeside', value: 'Lakeside', icon: <LakeIcon /> },
  { label: 'Wine Valley', value: 'wine-valley', icon: <WineIcon /> },
];

const specialOffers = [
  { label: 'Free Breakfast', value: 'free-breakfast' },
  { label: 'Flexible Rates', value: 'flexible-rates' },
  { label: 'Pay at the hotel', value: 'pay-at-the-hotel' },
  { label: 'Book Early — Save 20%', value: 'book-early—save' },
];

const HotelsPage: NextSheetWidthLayout = ({ data }: any) => {
  const [items, setItems] = useState<any[]>(data?.data);
  const [page, setPage] = useState<number>(2);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const lazyLoadingItems = async () => {
    const perPage = 10;
    const totalPage = Math.ceil(data.total / perPage);
    try {
      if (page > 1 && page <= totalPage && !isLoading) {
        setIsLoading(true);
        const res = await axiosClient.get('/hotels', {
          params: {
            page: page,
            perPage: perPage,
          },
        });
        setItems((preview) => [...preview, ...res.data]);
        setPage(page + 1);
      } else {
        setPage(page + 1);
        return;
      }
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.error(err);
    }
  };

  useEffect(() => {
    const handleScroll = async () => {
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const ducumentHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );

      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop + windowHeight >= ducumentHeight - 0 && !isLoading) {
        await lazyLoadingItems();
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [page, isLoading]);

  return (
    <section className="bg-LightGrey">
      <BookingStep activeStep={1} data={stepData} className="mt-20" />
      <Wrapper>
        <Alert
          content={
            'There are no results for your search. Showing results of nearby offers instead.'
          }
        />
        <div className="grid grid-cols-12 gap-16 mt-10">
          <div className="col-span-4 pr-5">
            <div>
              <PriceRange value={{ min: 1, max: 400 }} />
              <FilterBox title="Landscape" data={landScape} />
              <FilterBox title="Special Offers" data={specialOffers} />
              <Image
                loading="lazy"
                className="w-full h-full mt-4"
                src={require('@/assets/banner-1.png')}
                alt="banner-hotel"
                width={0}
                height={0}
              />
            </div>
          </div>

          <div className="col-span-8">
            <div className='grid grid-cols-8 gap-12'>
              {items?.map((ele: any, index: any) => {
                return (
                  <div className='col-span-4' key={index}>
                    <Hotels key={index} data={ele} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

HotelsPage.Layout = BookingLayout;

export default HotelsPage;

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  try {
    const page = Number(context.params?.page) || 1;

    const { data } = await axios.get('http://localhost:3000/api/hotels', {
      params: {
        page,
        perPage: 10,
      },
    });

    return {
      props: {
        data: data,
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
