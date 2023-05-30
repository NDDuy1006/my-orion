import clsx from 'clsx';
import { useEffect, useState } from 'react';
import Brand from './Brand';
import NavLinks from './NavLinks';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import ButtonShare, { BtnConstClassName } from '@/components/global/ButtonShare';

export interface HeaderProps {
  menu: {
    name: string;
    url: string;
  }[];
  logo: string;
  btnText: string;
  url: string;
}

export default function Header({ menu, logo, btnText, url }: HeaderProps) {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [open]);

  return (
    <header
      className={clsx(
        `absolute z-50 w-full transition-all h-20 flex items-center shadow-shadow1`,
        open ? 'shadow-none' : null
      )}
    >
      <div className="px-6 w-full  h-full flex items-center justify-between">
        <div className="z-40 py-4 lg:w-auto w-full flex justify-between">
          <Brand />
          <div className="flex gap-4 lg:hidden">
            <div className="hidden min-[375px]:block">
              <ButtonShare content={btnText} className="mt-0" />
            </div>
            <div className=" my-auto" onClick={() => setOpen(!open)}>
              {open ? (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </div>
          </div>
        </div>
        <ul className="lg:flex hidden items-center gap-9 h-full">
          <NavLinks menu={menu} setOpen={setOpen} />
        </ul>
        <div className="lg:block hidden">
          <div className="flex flex-row items-center gap-4">
            <ButtonShare content={btnText} style={BtnConstClassName.outlinewhite} />
            <Bars3Icon className="block h-6 w-6 text-[white]" />
          </div>
        </div>

        {/* Mobile nav */}
        <div
          className={clsx(
            `lg:hidden bg-neutralBackground absolute left-0 overflow-hidden w-full duration-500`,
            open ? 'top-20 h-[100vh] visible' : 'top-20 h-[0px] invisible'
          )}
        >
          <div className="bg-neutralBackground overflow-auto h-[calc(100vh_-_-4rem)]">
            <ul className="container max-[767px]:max-w-full flex flex-col lg:flex-row gap-4 lg:gap-0 pt-8 lg:pt-0">
              <NavLinks menu={menu} setOpen={setOpen} />
              <div className="py-5 min-[376px]:hidden">
                <ButtonShare content={btnText} />
              </div>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
