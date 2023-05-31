import React, { Fragment } from 'react';
import BoxContentProps from './@types';
import clsx from 'clsx';

enum StyleBox {
    BOX = 'box',
    Line = 'line'
}

const BoxContent = ({onClick, className, label, icon, labelStyle, width, height, style }: BoxContentProps) => {
    return (
        <div
            onClick={() =>  onClick}
            style={{width, height}}
            className={clsx(
              'flex items-center justify-between h-[40px] border  border-solid border-LightGrey mt-1 first-of-type:mt-0 px-3 rounded-md cursor-pointer ', {
                'border': style === StyleBox.BOX,
                'border-t ': style === StyleBox.Line,
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
