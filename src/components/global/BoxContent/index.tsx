import React, { Fragment } from 'react';
import BoxContentProps from './@types';
import clsx from 'clsx';

const BoxContent = ({onClick, className, label, icon, labelStyle, width, height }: BoxContentProps) => {
    return (
        <div
            onClick={() =>  onClick}
            style={{width, height}}
            className={clsx(
              'flex items-center justify-between h-[40px] border border-solid border-LightGrey mt-1 first-of-type:mt-0 px-3 rounded-md',
              className
            )}
        >
            <p className={clsx(labelStyle)}>{label}</p>
            {icon && icon}
        </div>
    );
};

export default BoxContent;
