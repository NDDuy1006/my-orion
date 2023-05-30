import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import styles from './Header.module.scss';
import { useRouter } from 'next/router';
import { useWindowDimensions } from '@/hooks/useWindowDimensions';

export interface MenuProps {
    name: string;
    url: string;
}
interface Props {
    menu: MenuProps[];
    setOpen: Dispatch<SetStateAction<boolean>>;
}

const largeScreen = 1024; //large size in viewport

export default function NavLinks({ setOpen, menu }: Props) {
    const [hoverLink, setHoverLink] = useState('');
    const pathname = useRouter().pathname;
    const [heading, setHeading] = useState('');
    const [hoverIdx, setHoverIdx] = useState(-1);
    const [clickLinked, setClickedLink] = useState<boolean>(false);
    const { width } = useWindowDimensions();

    const handleHoverMenuItem = (idx: number) => setHoverIdx(idx);
    const handleLoseHoverMenuItem = () => setHoverIdx(-1);

    const getParentPath = pathname?.includes('/') ? pathname.split('/')[1] : '';
    useEffect(() => {
        setClickedLink(false);
    }, [clickLinked]);

    return (
        <>
            {menu?.map((menu, index) => {
                    return (
                        <li key={index} className="h-full flex items-center ">
                            <Link
                                href={menu.url}
                                className={clsx(
                                    `flex transition-all text-[white]`,
                                    styles.hoverNav
                                )}
                                onClick={() => setOpen(!open)}
                            >
                                {menu.name}
                            </Link>
                        </li>
                    );
            })}
        </>
    );
}
