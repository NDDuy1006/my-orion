import React, { Fragment } from 'react';
import styles from './Button.module.scss';
import ButtonProps from './@types';
import clsx from 'clsx';

export enum ButtonConst {
  DARK = 'dark',
  OUTLINE = 'outline',
}

export const BtnConstClassName: { [name in ButtonConst]: string } = {
  [ButtonConst.DARK]: 'btnDark',
  [ButtonConst.OUTLINE]: 'btnOutline',
};

enum ButtonSize {
  LARGE = 'large',
  MEDIUM = 'medium',
  SMALL = 'small',
}

const ButtonShare = ({ content, style, className, onClick, size }: ButtonProps) => {
  return (
    <>
      <button
        onClick={onClick}
        className={clsx(
          style ? style : BtnConstClassName.dark,
          'btnShare ',
          className,
          size
            ? {
                'px-[23px] py-[15px]': size === ButtonSize.LARGE,
                'px-[15px] py-[10px]': size === ButtonSize.MEDIUM,
                'px-[10px] py-[5px]': size === ButtonSize.SMALL,
              }
            : 'px-[23px] py-[15px]'
        )}
      >
        {content}
      </button>
    </>
  );
};

export default ButtonShare;
