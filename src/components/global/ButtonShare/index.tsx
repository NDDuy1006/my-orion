import React, { Fragment } from 'react';
import styles from './Button.module.scss';
import ButtonProps from './@types';
import clsx from 'clsx';


export enum ButtonConst {
  PRIMARY = 'primary',
  ROUNDED = 'rounded'
}

export const BtnConstClassName: { [name in ButtonConst]: string } = {
  [ButtonConst.PRIMARY]: 'btnPrimary',
  [ButtonConst.ROUNDED]: 'btnRounded',
}


const ButtonShare = ({ content, style, className, onClick }: ButtonProps) => {
  return (
    <>
      <button
        onClick={onClick}
        className={clsx(style || BtnConstClassName.primary, 'btnShare', className)} >
        {content}
      </button>
    </>
  )
}

export default ButtonShare