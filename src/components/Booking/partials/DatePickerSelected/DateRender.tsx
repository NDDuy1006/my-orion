import React from 'react';
import { Dayjs } from 'dayjs';
import { AntCloudOutlined } from '@ant-design/icons';
import clsx from 'clsx';
import styles from './DatePicker.module.scss';

interface DaterenderProps {
  currentDate: Dayjs;
  today?: Dayjs;
  dateType?: string;
}

export enum DateRate {
  high = 'high',
  average = 'average',
  low = 'low',
}

const DateRender = ({ currentDate, today, dateType }: DaterenderProps) => {
  // const populateClass = (type: string) => {
  //   let defaultClass = 'date';
  //   if (type === 'high') defaultClass += ' high';
  //   if (type === 'average') defaultClass += ' average';
  //   if (type === 'low') defaultClass += ' low';

  //   return defaultClass;
  // };
  return (
    <div
      className={clsx('ant-picker-cell-inner date', {
        high: dateType === DateRate.high,
        average: dateType === DateRate.average,
        low: dateType === DateRate.low,
      })}
    >
      <span className="text-xl leading-[10px]">{currentDate.date()}</span>
      <p className="text-[12px]">30$</p>
    </div>
  );
};

export default DateRender;
