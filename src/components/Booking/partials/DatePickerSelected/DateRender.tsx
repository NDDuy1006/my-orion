import React from 'react'
import { Dayjs } from 'dayjs';
import { AntCloudOutlined } from '@ant-design/icons';

interface DaterenderProps {
    currentDate: Dayjs, 
    today?: Dayjs
}

const DateRender = ({currentDate, today} : DaterenderProps) => {
    return (
        <div className='ant-picker-cell-inner'>
            <div className='flex justify-between px-2 text-[10px]'>
            <AntCloudOutlined  />
            <span>12°C</span>
            </div>
            <span className='text-xl leading-[10px]'>
              {currentDate.date()} 
            </span>
            <p className='text-[12px]'>30$</p>
        </div>
      )
}

export default DateRender