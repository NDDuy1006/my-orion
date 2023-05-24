import { NextSheetWidthLayout } from '@/types/layoutType';
import React from 'react';
import { GetStaticPropsContext } from 'next';
import { Wrapper } from '@/components';
import CheckBox from '@/components/global/CheckBox';
import Image from 'next/image';
import BookingLayout from '@/layouts/BookingLayout';
import BookingStep from '@/components/global/BookingStep';
import Recommended from '@/components/ResultItem/partials/Recommended';
import axios from 'axios';
import dynamic from 'next/dynamic';
const Rooms = dynamic(() => import('@/components/ResultItem/partials/RoomItem'));

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

const RoomsPage: NextSheetWidthLayout = ({data}: any) => {
    return (
        <>
            <Wrapper>
                <BookingStep data={stepData} activeStep={2} />
                <div className="grid grid-cols-12 gap-16 mt-10">
                    <div className="col-span-4 pr-5">
                        <div>
                            {dataCheckBox.map((ele: any, index: number) => {
                                return <CheckBox key={index} data={ele} />;
                            })}

                            <Image
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
                        {data?.data?.map((ele: any, index: any) => {
                            return <Rooms key={index} data={ele} />;
                        })}
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
                data :res.data
            },
            revalidate: 60,
        } 
    } catch (err) {
        return {
            props: {
                data: [],
            },
            revalidate: 0,
        };
    }
};
