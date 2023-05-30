import Image from 'next/image';
import React from 'react';

type Props = {};

const gallery = [
  '//localhost:3000/images/gallerry/GalleryPicture1.jpg',
  '//localhost:3000/images/gallerry/GalleryPicture2.jpg',
  '//localhost:3000/images/gallerry/GalleryPicture3.jpg',
  '//localhost:3000/images/gallerry/GalleryPicture4.jpg',
  '//localhost:3000/images/gallerry/GalleryPicture5.jpg',
  '//localhost:3000/images/gallerry/GalleryPicture6.jpg',
];

const Gallery = ({}: Props) => {
  return (
    <div className="flex flex-row items-center">
      {gallery.map((img) => (
        <div key={img} className="relative basis-1/6">
          <Image
            alt={'gallery'}
            className="w-full h-full"
            unoptimized
            width={0}
            height={0}
            src={img}
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
