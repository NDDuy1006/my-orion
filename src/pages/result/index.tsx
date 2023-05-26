import { NextSheetWidthLayout } from '@/types/layoutType';
import React, { useState, useEffect, useRef } from 'react';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import { Wrapper } from '@/components';
import CheckBox from '@/components/global/CheckBox';
import BookingLayout from '@/layouts/BookingLayout';
import BookingStep from '@/components/global/BookingStep';
import axios from 'axios';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Recommended from '@/components/ResultItem/partials/Recommended';
import LoadingItem from '@/components/global/LoadingItem';
import axiosClient from '@/clientApi/axiosClient';
const Hotels = dynamic(() => import('@/components/ResultItem/partials/HotelItem'), {
    loading: () => <LoadingItem />,
});

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

const HotelsPage: NextSheetWidthLayout = ({ data }: any) => {
    const [items, setItems] = useState<any[]>(data?.data);
    const [page, setPage] = useState<number>(2);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const lazyLoadingItems = async () => {
        const perPage = 10;
        const totalPage = Math.ceil(data.total / perPage);
        try {
            if(page > 1 && page <= totalPage && !isLoading  ) {
                setIsLoading(true)
                const res = await axiosClient.get('/hotels', {
                    params: {
                        page: page,
                        perPage: perPage,
                    }
                });
               setItems((preview) => [...preview, ...res.data]);
               setPage(page + 1);
            } else {
                setPage(page + 1);
                return;
            }
            setIsLoading(false)
        } catch (err) {
            setIsLoading(false)
            console.error(err)
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

            if (scrollTop + windowHeight >= ducumentHeight - 0 && !isLoading ) {
                await lazyLoadingItems();
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [page, isLoading]);

    return (
        <Wrapper>
            <BookingStep activeStep={1} data={stepData} className='mt-10' />
            <div className="grid grid-cols-12 gap-16 mt-10">
                <div className="col-span-4 pr-5">
                    <div>
                        {dataCheckBox?.map((ele: any, index: number) => {
                            return <CheckBox key={index} data={ele} />;
                        })}

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
                    <Recommended />

                    {items?.map((ele: any, index: any) => {
                        return <Hotels key={index} data={ele} />;
                    })}

                </div>
            </div>
        </Wrapper>
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
