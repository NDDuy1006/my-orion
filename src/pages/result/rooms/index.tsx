import { NextSheetWidthLayout } from '@/types/layoutType'
import React from 'react'
import { GetServerSidePropsContext } from 'next';
import { Wrapper } from '@/components';
import CheckBox from '@/components/global/CheckBox';
import hotel2 from '@/assets/hotel-2.png';
import hotel1 from '@/assets/hotel-1.png';
import hotel3 from '@/assets/hotel-3.png';
import Image from 'next/image';
import {RoomsPageProps } from '@/types/resultPage';
import RoomItem from '@/components/ResultItem/partials/RoomItem';
import BookingLayout from '@/layouts/BookingLayout';
import SearchMenu from '@/components/global/SearchMenu';
import BookingStep from '@/components/global/BookingStep';

const dataCheckBox = [
    {
        title: 'Amenities',
        content: [
            { label: "24hr front desk", value: 'title1' },
            { label: "Adults only", value: 'title2' },
            { label: "Aire-conditioned", value: 'title3' },
            { label: "Beachfront", value: 'title4' },
            { label: "Business center", value: 'title5' },
            { label: "label title 6", value: 'title6' },
            { label: "label title 7", value: 'title7' },
            { label: "label title 8", value: 'title8' },
        ]
    },
    {
        title: 'Bed type',
        content: [
            { label: "Queen", value: 'title1' },
            { label: "Double", value: 'title2' },
            { label: "King", value: 'title3' },
            { label: "Single/Twin", value: 'title4' },
            { label: "Bunk bed", value: 'title5' },
            { label: "label title 6", value: 'title6' },
            { label: "label title 7", value: 'title7' },
            { label: "label title 8", value: 'title8' },
            { label: "label title 9", value: 'title9' },
            { label: "label title 10", value: 'title10' },
        ]
    },
    {
        title: 'Style',
        content: []
    },
    {
        title: 'Other',
        content: []
    },
] 


const roomsData = [
    {   
        id: 1,
        image: hotel1,
        favouriteRoom: true,
        roomName: 'Turmzimmer Suite',
        description: 'Would you like to live at lofty heights in the old stately villa? With two bedrooms and a great view of the Wurmberg and the southern slope, this 57 sqm suite on the top floor is the right choice for those who love heights. Equipped with a kitchenette, two TVs and a bathroom with rain shower - but with a little less storage space due to the sloping roof. An open steam fireplace ensures atmospheric cosiness. The light atmosphere follows the daylight and you can change or dim it at any time. Mood themes can also be selected. We call it the "Titanic window": the deep room window with a grenade-like view of the southern Harz Mountains! And don\'t forget when the sun goes down: the snuggle switch by the bed!',
        location: 'Sonnenhotel Zum Stern',
        propertiesRoom: {
            numOfPeople: 2,
            bed: 1,
            acreage: 36,
        },
        price: 0,
    },
    {   
        id: 2,
        image: hotel2,
        favouriteRoom: false,
        roomName: 'Turmzimmer Suite',
        description: 'Would you like to live at lofty heights in the old stately villa? With two bedrooms and a great view of the Wurmberg and the southern slope, this 57 sqm suite on the top floor is the right choice for those who love heights. Equipped with a kitchenette, two TVs and a bathroom with rain shower - but with a little less storage space due to the sloping roof. An open steam fireplace ensures atmospheric cosiness. The light atmosphere follows the daylight and you can change or dim it at any time. Mood themes can also be selected. We call it the "Titanic window": the deep room window with a grenade-like view of the southern Harz Mountains! And don\'t forget when the sun goes down: the snuggle switch by the bed!',
        location: 'Sonnenhotel Zum Stern',
        propertiesRoom: {
            numOfPeople: 2,
            bed: 1,
            acreage: 36,
        },
        price: 389,
    },
    {   
        id: 3,
        image: hotel3,
        favouriteRoom: true,
        roomName: 'Turmzimmer Suite',
        description: 'Would you like to live at lofty heights in the old stately villa? With two bedrooms and a great view of the Wurmberg and the southern slope, this 57 sqm suite on the top floor is the right choice for those who love heights. Equipped with a kitchenette, two TVs and a bathroom with rain shower - but with a little less storage space due to the sloping roof. An open steam fireplace ensures atmospheric cosiness. The light atmosphere follows the daylight and you can change or dim it at any time. Mood themes can also be selected. We call it the "Titanic window": the deep room window with a grenade-like view of the southern Harz Mountains! And don\'t forget when the sun goes down: the snuggle switch by the bed!',
        location: 'Sonnenhotel Zum Stern',
        propertiesRoom: {
            numOfPeople: 2,
            bed: 1,
            acreage: 36,
        },
        price: 0,
    }
    
]

const RoomsPage: NextSheetWidthLayout = (props: RoomsPageProps) => {

    return (
        <>
            
        <Wrapper >
        <BookingStep />
            <div className='grid grid-cols-12 gap-16 mt-10'>
                <div className='col-span-4 pr-5'>
                    <div>
                        {
                            dataCheckBox.map((ele: any, index: number) => {
                                return(
                                    <CheckBox key={index} data={ele} />
                                )
                            })
                        }

                        <Image className='w-full h-full mt-4' src={require('@/assets/banner-1.png')} alt='banner-hotel' width={0} height={0}/>
                    </div>
                </div>

                <div className='col-span-8'>
                    {
                        roomsData.map((ele: any, index: any) => {
                            return (
                                <RoomItem key={index} data={ele} />
                            )
                        })
                    }
                </div>
            </div>
        </Wrapper></>
    );
}

RoomsPage.Layout = BookingLayout;

export default RoomsPage;


export const getStaticProps = async (context: GetServerSidePropsContext) => {

    return {
        props: {},
        revalidate: 60
    };
}
