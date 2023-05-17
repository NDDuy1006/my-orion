import React, { useEffect, useState } from 'react';
import { Button, Popover, Typography } from 'antd';
const buttonWidth = 70;
import styles from './SelectGuestDropdown.module.scss';
import GuestTypes from '../GuestTypes/GuestTypes';
import Image from 'next/image';
import clsx from 'clsx';
enum Mode {
  adult = 'adult',
  children = 'children',
  room = 'room',
}

const SelectGuestDropdown: React.FC = () => {
  const [roomValue, setRoomValue] = useState(0);
  const [adultValue, setAdultValue] = useState(0);
  const [childrenValue, setChildrenValue] = useState(0);
  const [max, setMaxValue] = useState(4);

  useEffect(() => {
    setMaxValue(roomValue * 4);
  }, [roomValue]);

  const handleIncrease = (mode: string) => {
    if (mode === Mode.children && adultValue + childrenValue < max) {
      setChildrenValue(childrenValue + 1);
    } else if (mode === Mode.adult && adultValue < max) {
      if (adultValue + childrenValue >= max) {
        setChildrenValue(childrenValue - 1);
      }
      setAdultValue(adultValue + 1);
    } else if (mode === Mode.room) {
      setRoomValue(roomValue + 1);
    }
  };

  const handleDescrease = (mode: string) => {
    if (mode === Mode.children) {
      setChildrenValue(childrenValue - 1);
    } else if (mode === Mode.adult) {
      setAdultValue(adultValue - 1);
    } else if (mode === Mode.room) {
      setRoomValue(roomValue - 1);
      setAdultValue(0);
    }
  };

  useEffect(() => {
    if (adultValue === 0) setChildrenValue(0);
  }, [adultValue]);

  const content = (
    <div className="guestType">
      <GuestTypes
        guestTitle={'Rooms'}
        value={roomValue}
        disabledDown={roomValue <= 0}
        mode={''}
        handleIncrease={() => handleIncrease(Mode.room)}
        handleDescrease={() => handleDescrease(Mode.room)}
      />
      <GuestTypes
        guestTitle={'Adults'}
        description={'Ages 18 or above'}
        value={adultValue}
        disabledUp={adultValue === max}
        disabledDown={adultValue <= 0}
        mode={''}
        handleIncrease={() => handleIncrease(Mode.adult)}
        handleDescrease={() => handleDescrease(Mode.adult)}
      />
      <GuestTypes
        guestTitle={'Children'}
        description={'Ages 0 - 17'}
        value={childrenValue}
        disabledUp={adultValue + childrenValue === max || adultValue === 0}
        disabledDown={childrenValue <= 0}
        mode={''}
        handleIncrease={() => handleIncrease(Mode.children)}
        handleDescrease={() => handleDescrease(Mode.children)}
      />
    </div>
  );

  return (
    <Popover
      className={clsx('rounded-[32px] h-12 w-[210px]')}
      placement="bottomLeft"
      content={content}
      trigger="click"
    >
      <Button className="!bg-[white]">
        <p className="flex items-center justify-around gap-2">
          <Image alt="" width={0} height={0} src={require('/public/images/icons/icon-user.svg')} />
          <span>{roomValue} Rooms,</span>
          <span>{adultValue + childrenValue} Guests</span>
        </p>
      </Button>
    </Popover>
  );
};

export default SelectGuestDropdown;
