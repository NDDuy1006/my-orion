import React, { Fragment } from 'react';
import BoxContentProps from './@types';
import clsx from 'clsx';

enum StyleBox {
    BOX = 'box',
    LINE = 'line'
}

const BoxContent = ({onClick, className, label, icon, labelStyle, width, height, style }: BoxContentProps) => {
    return (
        <div
            onClick={onClick}
            style={{width, height}}
            className={clsx(
              'flex items-center justify-between h-[40px] mt-1 first-of-type:mt-0 px-3 rounded-md cursor-pointer ', {
                'border border-solid border-LightGrey': style === StyleBox.BOX,
                '!border-t border-b-0 border-l-0 border-r-0 rounded-none border-solid border-LightGrey ': style === StyleBox.LINE,
              },
              className
            )}
        >
            <p className={clsx(labelStyle)}>{label}</p>
            {icon && icon}
        </div>
    );
};

export default BoxContent;
