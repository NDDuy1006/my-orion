import React, { Key, useEffect, useState } from 'react';
import styles from '../ResultItem.module.scss';
import Image from 'next/image';
import { StarFilled } from '@ant-design/icons';
import clsx from 'clsx';
import TagName, { TagNameStyle } from '@/components/global/TagName';
import ButtonShare, { BtnConstClassName } from '@/components/global/ButtonShare';
import { HotelItemProps } from '../@types';
import LoadingItem from '@/components/global/LoadingItem';
import { useRouter } from 'next/router';



const HoteltItem = ({ data }: HotelItemProps) => {
  const [favourite, setFavourite] = useState<Boolean>(false);

  const [isLoading, setIsLoading] = useState<Boolean>(false);

  const router = useRouter();

  const loadData = async () => {
    await setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500)
  }


  useEffect(() => {
    loadData()
    if (data.favouriteHotel) {
      setFavourite(true)
    }
  }, [data])

  const handleFavourite = () => setFavourite(current => !current);
  

  return (
    <>
    </>
  );
}

export default HoteltItem