// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


const resData = {
    data: [
        {   
            "id": 1,
            "image": 'http://localhost:3000/images/pics/hotel-1.png',
            "favouriteHotel": true,
            "hotelName": 'Sonnenhotel Zum Stern',
            "description": 'Elegant and spacious living in the studio: 41 sqm, quietly located and mostly with a fantastic view of the large spa park or the pedestrian zone with shops and cafés. The high-quality furnishings with box-spring beds, air conditioning, capsule machine, flat-screen TV, minibar, safe, modern bathroom with rain shower or tub and rental bathrobe/slippers offer pure feel-good ambience. Some studios have a balcony.',
            "location": 'Weitmoserstrasse 33 5630 Bad Hofgastein, Austria',
            "tag": [
                {
                    "tagName": 'mountain air',
                    "tagId":'mountain-air',
                },
                {
                    "tagName": 'enjoyment',
                    "tagId":'enjoyment',
                },
                {
                    "tagName": 'wellness',
                    "tagId":'wellness',
                }
            ]
        },
        {   
            "id": 2,
            "image": 'http://localhost:3000/images/pics/hotel-2.png',
            "favouriteHotel": false,
            "hotelName": 'Sonnenresort Maltschacher See',
            "description": 'In the Hotel Maltschacher See, the holiday sun tickles your nose early in the morning and arouses anticipation of a perfect holiday day at the beautiful, warm Maltschacher See. The picture book backdrop of the Nockberge impresses young and old. Here in the spacious holiday village there are holiday ideas for the whole family. In the children\'s club, the dear Sonnenwolfi awaits the children with a fun program while the parents enjoy their time out and explore the area. The all-inclusive offer is practical. An all-round carefree package for unlimited holiday joy.',
            "location": 'Maltschacher See Strasse 5 9560 Feldkirchen, Austria',
            "tag": [
                {
                    "tagName": 'wein',
                    "tagId":'wein',
                },
                {
                    "tagName": 'inspiration',
                    "tagId":'inspiration',
                },
                {
                    "tagName": 'wellness',
                    "tagId":'wellness',
                }
            ]
        },
        {   
            "id": 3,
            "image": 'http://localhost:3000/images/pics/hotel-3.png',
            "favouriteHotel": false,
            "hotelName": 'Sonnenresort Ossiacher See',
            "description": 'The team at Sonnenresort Ossiacher See is already looking forward to welcoming you in 2024 with great innovations, such as renovations, extensions and a whole new spa area!',
            "location": 'Fleischmarkt 20, 1010 Wien, Austria',
            "tag": [
                {
                    "tagName": 'family',
                    "tagId":'family',
                },
                {
                    "tagName": 'sport',
                    "tagId":'sport',
                },
                {
                    "tagName": 'sport',
                    "tagId":'sport',
                }
            ]
        }
    ],
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.send(resData);
}
