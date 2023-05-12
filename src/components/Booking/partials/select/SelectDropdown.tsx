import React, { useEffect, useState } from 'react';
import { Button, Popover } from 'antd';
const buttonWidth = 70;
import styles from './SelectDropdown.module.scss';
import GuestTypes from '../GuestTypes/GuestTypes';
import Image from 'next/image';
import clsx from 'clsx';
enum Mode {
  adult = 'adult',
  children = 'children',
}

const SelectDropdown: React.FC = () => {
  const MAX = 4;
  const [adultValue, setAdultValue] = useState(0);
  const [childrenValue, setChildrenValue] = useState(0);
  const handleIncrease = (mode: string) => {
    if (mode === Mode.children && adultValue + childrenValue < MAX) {
      setChildrenValue(childrenValue + 1);
    } else if (mode === Mode.adult && adultValue < MAX) {
      if (adultValue + childrenValue >= MAX) {
        setChildrenValue(childrenValue - 1);
      }
      setAdultValue(adultValue + 1);
    }
  };

  const handleDescrease = (mode: string) => {
    if (mode === Mode.children) {
      setChildrenValue(childrenValue - 1);
    } else if (mode === Mode.adult) {
      setAdultValue(adultValue - 1);
    }
  };

  useEffect(() => {
    if (adultValue === 0) {
      setChildrenValue(0);
    }
  }, [adultValue]);
  const content = (
    <div className="guestType">
      <GuestTypes
        guestTitle={'Adults'}
        description={'Ages 18 or above'}
        value={adultValue}
        disabledUp={adultValue === MAX}
        disabledDown={adultValue <= 0}
        mode={''}
        handleIncrease={() => handleIncrease(Mode.adult)}
        handleDescrease={() => handleDescrease(Mode.adult)}
      />
      <GuestTypes
        guestTitle={'Children'}
        description={'Ages 0 - 17'}
        value={childrenValue}
        disabledUp={adultValue + childrenValue === MAX || adultValue === 0}
        disabledDown={childrenValue <= 0}
        mode={''}
        handleIncrease={() => handleIncrease(Mode.children)}
        handleDescrease={() => handleDescrease(Mode.children)}
      />
    </div>
  );

  return (
    <Popover
      className={clsx(styles.test, 'rounded-[32px] h-12 w-52')}
      placement="bottomLeft"
      content={content}
      trigger="click"
    >
      <Button className="!bg-white">
        <p className="flex items-center justify-around gap-2">
          <span>{adultValue + childrenValue}</span> Guests,{' '}
          <Image
            alt=""
            width={0}
            height={0}
            src={require('../../../../../public/images/icons/icon_user.png')}
          />
        </p>
      </Button>
    </Popover>
  );
};

export default SelectDropdown;
