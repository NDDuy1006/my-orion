import { useState } from 'react';
import styles from '../Room.module.scss';
import ImageBox from './ImageBox';
import clsx from 'clsx';
import { RoomCardProps } from '../@types';

const RoomCard = ({ media, overview, detail }: RoomCardProps) => {
  const [showDetail, setShowDetail] = useState<boolean>(false);

  const handleToggleShowDetail = () => setShowDetail(!showDetail);

  return (
    <div className={styles['room-container']}>
      <div className={styles['room-header']}>
        <div className="flex flex-row gap-8">
          <div className={styles['room-media']}>{media}</div>
          <div className={styles['room-overview']}>{overview}</div>
        </div>
        <div
          className={clsx(styles['detail-btn'], showDetail && styles['open'])}
          onClick={handleToggleShowDetail}
          role="button"
        >
          {showDetail ? 'minimize details' : 'show full details'}
        </div>
      </div>
      <div className={clsx(styles['room-content'], showDetail && styles['open'])}>{detail}</div>
    </div>
  );
};

export default RoomCard;
