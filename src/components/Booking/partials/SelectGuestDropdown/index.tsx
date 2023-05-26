import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Button, Popover } from 'antd';
import GuestTypes from './GuestTypes/GuestTypes';
import Image from 'next/image';
import clsx from 'clsx';
enum Mode {
    adult = 'adult',
    children = 'children',
    room = 'room',
}

interface SelectGuestDropdownProps {
    onClick?: (value: any) => void;
}

const SelectGuestDropdown = ({ onClick }: SelectGuestDropdownProps) => {
    const [show, setShow] = useState(false);
    const [max, setMaxValue] = useState(4);
    const [guestValue, setGuesValue] = useState<{ room: number; adult: number; children: number }>({
        room: 0,
        adult: 0,
        children: 0,
    });

    useEffect(() => {
        setMaxValue(guestValue.room * 4);
    }, [guestValue.room]);

    useEffect(() => {
        if (guestValue.adult === 0) setGuesValue({ ...guestValue, children: 0 });
    }, [guestValue.adult]);

    const handleFinish = () => {
        onClick && onClick(guestValue);
    };

    useEffect(() => {
        handleFinish();
    }, [guestValue]);

    useEffect(() => {
        const handleScroll = () => {
            setShow(false);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleIncrease = (mode: string) => {
        if (mode === Mode.children && guestValue.adult + guestValue.children < max) {
            setGuesValue({ ...guestValue, children: guestValue.children + 1 });
        } else if (mode === Mode.adult && guestValue.adult < max) {
            if (guestValue.adult + guestValue.children >= max) {
                setGuesValue({ ...guestValue, adult: guestValue.adult - 1 });
            }
            setGuesValue({ ...guestValue, adult: guestValue.adult + 1 });
        } else if (mode === Mode.room) {
            setGuesValue({ ...guestValue, room: guestValue.room + 1 });
        }
        handleFinish();
    };

    const handleDescrease = (mode: string) => {
        if (mode === Mode.children) {
            setGuesValue({ ...guestValue, children: guestValue.children - 1 });
        } else if (mode === Mode.adult) {
            setGuesValue({ ...guestValue, adult: guestValue.adult - 1 });
        } else if (mode === Mode.room) {
            setGuesValue({ ...guestValue, room: guestValue.room - 1, adult: 0 });
        }
        handleFinish();
    };

    const content = (
        <div className="guestType w-[186px]">
            <GuestTypes
                guestTitle={'Rooms'}
                value={guestValue.room}
                disabledDown={guestValue.room <= 0}
                mode={''}
                handleIncrease={() => {
                    handleIncrease(Mode.room);
                }}
                handleDescrease={() => handleDescrease(Mode.room)}
            />
            <GuestTypes
                guestTitle={'Adults'}
                description={'Ages 18 or above'}
                value={guestValue.adult}
                disabledUp={guestValue.adult === max}
                disabledDown={guestValue.adult <= 0}
                mode={''}
                handleIncrease={() => handleIncrease(Mode.adult)}
                handleDescrease={() => handleDescrease(Mode.adult)}
            />
            <GuestTypes
                guestTitle={'Children'}
                description={'Ages 0 - 17'}
                value={guestValue.children}
                disabledUp={
                    guestValue.adult + guestValue.children === max || guestValue.adult === 0
                }
                disabledDown={guestValue.children <= 0}
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
                    <Image
                        alt=""
                        width={0}
                        height={0}
                        src={require('/public/images/icons/icon-user.svg')}
                    />
                    <span>{guestValue.room} Rooms,</span>
                    <span>{guestValue.adult + guestValue.children} Guests</span>
                </p>
            </Button>
        </Popover>
    );
};

export default SelectGuestDropdown;
