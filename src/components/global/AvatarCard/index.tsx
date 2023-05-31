import React, { Fragment } from 'react';
import styles from './AvatarCard.module.scss';
import AvatarCardProps from './@types';
import { Avatar } from 'antd';
import { StarFilled, UserOutlined } from '@ant-design/icons';
import ButtonShare, { BtnConstClassName } from '../ButtonShare';
import clsx from 'clsx';

enum Style {
  HORIZONTAL = 'horizontal',
  VERTICAL = 'vertical',
}

const AvatarCard = ({ button, className, src, content, style }: AvatarCardProps) => {
  return (
    <div
      className={clsx('flex justify-between items-center pt-6', {
        'flex-col': style === Style.VERTICAL,
      })}
    >
      <div
        className={clsx(
          'flex justify-between items-center gap-3',
          {
            'flex-col': style === Style.VERTICAL,
            'flex-row !justify-center': style === Style.HORIZONTAL,
          },
          className
        )}
      >
        <Avatar src={src} size={60} />
        <div>{content}</div>
      </div>
      {button}
    </div>
  );
};

export default AvatarCard;
