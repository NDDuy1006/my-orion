
import MainLayout from '@/layouts/MainLayout'
import { NextSheetWidthLayout } from '@/types/layoutType'
import React, { useEffect } from 'react'
import resultPageProps from '@/types/resultPage';
import { GetServerSidePropsContext } from 'next';
import { Wrapper } from '@/components';
import CheckBox from '@/components/global/CheckBox';
import ResultItem from '@/components/ResultItem';
import hotel1 from '../../assets/hotel-1.png';
import hotel2 from '../../assets/hotel-2.png';
import hotel3 from '../../assets/hotel-3.png';

const dataCheckBox = [
    {
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
        content: [
            { label: "Queen", value: 'title1' },
            { label: "Double", value: 'title2' },
            { label: "King", value: 'title3' },
            { label: "Single/Twin", value: 'title4' },
            { label: "Bunk bed", value: 'title5' },
            { label: "label title 6", value: 'title6' },
            { label: "label title 7", value: 'title7' },
            { label: "label title 8", value: 'title8' },
        ]
    },
] 

const resultData = [
    {   
        id: 1,
        image: hotel1,
        favouriteHotel: true,
        hotelName: 'Sonnenhotel Zum Stern',
        description: 'Elegant and spacious living in the studio: 41 sqm, quietly located and mostly with a fantastic view of the large spa park or the pedestrian zone with shops and cafés. The high-quality furnishings with box-spring beds, air conditioning, capsule machine, flat-screen TV, minibar, safe, modern bathroom with rain shower or tub and rental bathrobe/slippers offer pure feel-good ambience. Some studios have a balcony.',
        location: 'Weitmoserstrasse 33 5630 Bad Hofgastein, Austria',
        tag: [
            {
                tagName: 'mountain air',
                tagId:'mountain-air',
            },
            {
                tagName: 'enjoyment',
                tagId:'enjoyment',
            },
            {
                tagName: 'wellness',
                tagId:'wellness',
            }
        ]
    },
    {   
        id: 2,
        image: hotel2,
        favouriteHotel: false,
        hotelName: 'Sonnenresort Maltschacher See',
        description: 'In the Hotel Maltschacher See, the holiday sun tickles your nose early in the morning and arouses anticipation of a perfect holiday day at the beautiful, warm Maltschacher See. The picture book backdrop of the Nockberge impresses young and old. Here in the spacious holiday village there are holiday ideas for the whole family. In the children\'s club, the dear Sonnenwolfi awaits the children with a fun program while the parents enjoy their time out and explore the area. The all-inclusive offer is practical. An all-round carefree package for unlimited holiday joy.',
        location: 'Maltschacher See Strasse 5 9560 Feldkirchen, Austria',
        tag: [
            {
                tagName: 'wein',
                tagId:'wein',
            },
            {
                tagName: 'inspiration',
                tagId:'inspiration',
            },
            {
                tagName: 'wellness',
                tagId:'wellness',
            }
        ]
    },
    {   
        id: 3,
        image: hotel3,
        favouriteHotel: false,
        hotelName: 'Sonnenresort Ossiacher See',
        description: 'The team at Sonnenresort Ossiacher See is already looking forward to welcoming you in 2024 with great innovations, such as renovations, extensions and a whole new spa area!',
        location: 'Fleischmarkt 20, 1010 Wien, Austria',
        tag: [
            {
                tagName: 'family',
                tagId:'family',
            },
            {
                tagName: 'sport',
                tagId:'sport',
            },
            {
                tagName: 'sport',
                tagId:'sport',
            }
        ]
    }
]

const resultPage: NextSheetWidthLayout = (props: resultPageProps) => {

    return (
        <Wrapper>
            <div className='grid grid-cols-12 gap-16'>
                <div className='col-span-4 pr-5'>
                    <div>
                        {
                            dataCheckBox.map((ele: any, index: number) => {
                                return(
                                    <CheckBox key={index} data={ele.content} />
                                )
                            })
                        }
                    </div>
                </div>

                <div className='col-span-8'>
                    {
                        resultData.map((ele: any, index: any) => {
                            return (
                                <ResultItem key={index} data={ele} />
                            )
                        })
                    }
                </div>
            </div>
        </Wrapper>
    );
}

resultPage.Layout = MainLayout;

export default resultPage;


export const getStaticProps = async (context: GetServerSidePropsContext) => {

    return {
        props: {},
        revalidate: 60
    };
}
