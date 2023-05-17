import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Tooltip } from 'antd';
import { Submenu } from './Submenu';
import { useRouter } from 'next/router';
import { useWindowDimensions } from '@/hooks/useWindowDimensions';

export interface MenuProps {
  name: string;
  submenu: boolean;
  // sublinks: SublinkProps;
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
        if (!menu.submenu) {
          return (
            <li key={index} className="h-full flex items-center">
              <Link
                href={menu.url}
                className={clsx(
                  'flex transition-all navText  hover:text-primaryMain',
                  getParentPath === menu.url?.substring(1)
                    ? 'text-primaryMain'
                    : 'text-neutralPrimary'
                )}
                onClick={() => setOpen(!open)}
              >
                {menu.name}
              </Link>
            </li>
          );
        }
        return (
          <li
            key={index}
            className="h-full"
            onMouseEnter={() => handleHoverMenuItem(index)}
            onMouseLeave={handleLoseHoverMenuItem}
          >
            <div
              className="text-left lg:cursor-pointer group h-full"
              onMouseEnter={() => setHoverLink(menu.name)}
              onMouseLeave={() => setHoverLink('')}
            >
              <div
                className="relative h-full flex justify-between w-full items-center"
                onClick={() => {
                  heading !== menu.name ? setHeading(menu.name) : setHeading('');
                }}
              >
                <Tooltip
                  open={width >= largeScreen && hoverIdx === index && !clickLinked}
                  overlayInnerStyle={{ color: '#566C76', width: 'fit-content' }}
                  // title={
                  //   // <Submenu
                  //   //   setClickedLink={setClickedLink}
                  //   //   sublink={menu.sublinks}
                  //   //   setOpen={setOpen}
                  //   // />
                  // }
                  placement="bottomLeft"
                  color="#fff"
                >
                  <p
                    className={clsx(
                      'flex  lg:w-auto lg:justify-normal items-center transition-all navText -hover:text-primaryMain',
                      getParentPath === menu.name.toLowerCase() || hoverLink === menu.name
                        ? 'text-primaryMain'
                        : 'text-neutralPrimary'
                    )}
                  >
                    <span>{menu.name}</span>

                    <span className="text-lg pt-0.5 pl-1 hidden lg:inline">
                      <>
                        {hoverLink === menu.name ? (
                          <ChevronUpIcon
                            className="lg:block hidden transition-transform h-4 w-4"
                            aria-hidden="true"
                          />
                        ) : (
                          <ChevronDownIcon
                            className="lg:block hidden transition-transform h-4 w-4"
                            aria-hidden="true"
                          />
                        )}
                      </>
                    </span>
                  </p>
                </Tooltip>
                <span className="text-lg pt-0.5 pl-1 lg:hidden inline group-hover:text-primaryMain">
                  {heading === menu.name ? (
                    <ChevronUpIcon className="block h-4 w-4" aria-hidden="true" />
                  ) : (
                    <ChevronDownIcon className="block h-4 w-4" aria-hidden="true" />
                  )}
                </span>
              </div>
            </div>

            {/* Mobile menus */}
            {/* <div
              className={clsx(
                `flex flex-col gap-4 mb-4`,
                heading === menu.name ? 'lg:hidden' : 'hidden'
              )}
            >
              <Submenu setClickedLink={setClickedLink} sublink={menu.sublinks} setOpen={setOpen} />
            </div> */}
          </li>
        );
      })}
    </>
  );
}