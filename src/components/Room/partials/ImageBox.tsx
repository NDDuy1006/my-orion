import { useState, useMemo } from 'react';
import { ImageBoxProps } from '../@types';
import styles from '../Room.module.scss';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const gap = 20;
const itemNum = 5;

const ImageBox = ({
  data = [
    '/images/pics/hotel-1.png',
    '/images/pics/hotel-2.png',
    '/images/pics/hotel-3.png',
    '/images/pics/hotel-4.jpg',
    '/images/pics/hotel-5.jpg',
    '/images/pics/hotel-6.jpg',
    '/images/pics/hotel-7.jpg',
  ],
  size = [420, 325],
}: ImageBoxProps) => {
  const [width, height] = size;
  const [selected, setSelected] = useState<string>(data[0]);
  const [pointer, setPointer] = useState<number>(0);

  const itemSize = (width - (itemNum - 1) * gap) / itemNum;

  const handleSelect = (imgSrc: string) => setSelected(imgSrc);

  const handleScrollRight = () => setPointer(pointer - itemSize - gap);

  const handleScrollLeft = () => setPointer(pointer + itemSize + gap);

  const allowScrollLeft = useMemo<boolean>(() => pointer < 0, [pointer]);

  const allowScrollRight = useMemo<boolean>(
    () => pointer > -1 * ((data.length - itemNum) * itemSize + (data.length - itemNum - 1) * gap),
    [pointer, itemSize, data]
  );

  return (
    <div className={styles['image-box-container']} style={{ width }}>
      <div className={styles['image-overview']}>
        <Image src={selected} width={width} height={height} alt="overview" />
      </div>
      <div className={styles['image-list']} style={{ height: itemSize }}>
        {allowScrollLeft && (
          <div
            role="button"
            className={styles['image-list__chevron-left']}
            onClick={handleScrollLeft}
          >
            <ChevronLeftIcon className="text-[white]" />
          </div>
        )}
        {allowScrollRight && (
          <div
            role="button"
            className={styles['image-list__chevron-right']}
            onClick={handleScrollRight}
          >
            <ChevronRightIcon className="text-[white]" />
          </div>
        )}
        <div className={styles['image-list__container']} style={{ left: pointer }}>
          {data.map((image) => (
            <Image
              onClick={() => handleSelect(image)}
              key={image}
              src={image}
              height={itemSize}
              width={itemSize}
              alt="item"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageBox;
