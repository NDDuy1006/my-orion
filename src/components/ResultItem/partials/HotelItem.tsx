import React, { Key, useState } from 'react';
import styles from '../ResultItem.module.scss';
import Image from 'next/image';
import { StarFilled } from '@ant-design/icons';
import clsx from 'clsx';
import ResultItemProps from '../@types';
import TagName, { TagNameStyle } from '@/components/global/TagName';
import ButtonShare, { BtnConstClassName } from '@/components/global/ButtonShare';



const HoteltItem = ({ data }: ResultItemProps) => {

  const [favourite, setFavourite] = useState<Boolean>(false)

  const handleFavourite = () => setFavourite(current => !current);


  return (
    <div className={clsx('flex gap-6 mb-4 last-of-type:mb-0', styles.resultItem)}>
      <div className='w-1/4'>
        <div className='w-56 h-56 overflow-hidden rounded-xl'>
          <Image className='w-full h-full object-cover' src={data.image} alt={data.hotelName} width={0} height={0} unoptimized />
        </div>
      </div>

      <div className='flex flex-col justify-around w-3/4 relative'>

        <div onClick={handleFavourite} className='absolute top-0 right-0 cursor-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke={favourite ? '#ff4d4f' : '#20272C'} fill={favourite ? '#ff4d4f' : 'rgba(32, 39, 44, 0.04)'} className='w-[20px] h-[18px]'>
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
        </div>

        <div className='flex items-center'>
          <StarFilled className='text-starYellow mr-2 w-4' />
          <span className='text-[12px] text-Main'>Classic</span>
        </div>

        <h1 className={clsx(styles.itemTitle, 'line-clamp-1')}>{data.hotelName}</h1>

        <div className='flex items-center mb-2'>
          <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 0.25C3.54961 0.25 0.75 2.76992 0.75 5.875C0.75 10.875 7 17.75 7 17.75C7 17.75 13.25 10.875 13.25 5.875C13.25 2.76992 10.4504 0.25 7 0.25ZM7 9C6.50555 9 6.0222 8.85338 5.61107 8.57867C5.19995 8.30397 4.87952 7.91352 4.6903 7.45671C4.50108 6.99989 4.45157 6.49723 4.54804 6.01227C4.6445 5.52732 4.8826 5.08186 5.23223 4.73223C5.58186 4.3826 6.02732 4.1445 6.51227 4.04804C6.99723 3.95157 7.49989 4.00108 7.95671 4.1903C8.41352 4.37952 8.80397 4.69995 9.07867 5.11107C9.35338 5.5222 9.5 6.00555 9.5 6.5C9.49928 7.16282 9.23565 7.79828 8.76697 8.26697C8.29828 8.73565 7.66282 8.99928 7 9Z" fill="#20272C" />
          </svg>
          <p className='text-Main text-[12px] leading-[18px] ml-3'>{data.location}</p>
        </div>

        <p className={clsx(styles.itemContent, 'line-clamp-3')}>{data.description}</p>

        <div className='mt-2'>
          {
            data.tag.map((ele: any, index: Key) => {
              return (
                <TagName key={index} style={TagNameStyle.default} content={ele.tagName} className='shadow-[0px 0px 2px rgba(0, 0, 0, 0.2)] mr-2 mb-2' />

              )
            })
          }

        </div>

        <div className='text-right w-full'>
          <ButtonShare onClick={() => { console.log('hello word!!!') }} style={BtnConstClassName.rounded} content={'show room'} />
        </div>
      </div>
    </div>
  );
}

export default HoteltItem