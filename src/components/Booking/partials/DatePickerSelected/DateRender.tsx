import React from 'react';
import { Dayjs } from 'dayjs';
import clsx from 'clsx';

interface DaterenderProps {
    currentDate: Dayjs;
    today?: Dayjs;
    dateType?: string;
    showPrice: boolean;
}

export enum DateRate {
    high = 'high',
    average = 'average',
    low = 'low',
}

const DateRender = ({ currentDate, today, dateType, showPrice }: DaterenderProps) => {
    return (
        <div
            className={clsx('ant-picker-cell-inner !h-11 !w-11 p-0 !flex flex-col date', {
                high: dateType === DateRate.high,
                average: dateType === DateRate.average,
                low: dateType === DateRate.low,
            })}
        >
            <p className="text-[1.125rem]">{currentDate.date()}</p>
            {showPrice && <p className="text-[0.625]">30$</p>}
        </div>
    );
};

export default DateRender;
