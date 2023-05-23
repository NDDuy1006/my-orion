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
      className={clsx('ant-picker-cell-inner !h-11 p-0 date', {
        high: dateType === DateRate.high,
        average: dateType === DateRate.average,
        low: dateType === DateRate.low,
      })}
    >
      <span className="text-xl leading-[10px] inline-block mt-2">{currentDate.date()}</span>
      {showPrice && <p className="text-[12px]">30$</p>}
    </div>
  );
};

export default DateRender;
