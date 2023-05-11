import React from 'react';
import { DatePicker } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import { AntCloudOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;

const DatePickerSelect = () => {
  return (
    <>
      <RangePicker
        className="rounded-[32px]"
        placement="bottomLeft"
        // panelRender={(panelNode) => <div className='w-full'>{panelNode}</div>}
        renderExtraFooter={() => <div>kdks</div>}
        // size={'large'}
        onOpenChange={(value) => {
          console.log(value);
        }}
        dateRender={(currentDate: Dayjs, today: Dayjs) => {
          return (
            <div className="ant-picker-cell-inner">
              <div className="flex justify-between px-2 text-[10px]">
                <AntCloudOutlined />
                <span>12°C</span>
              </div>
              <span className="text-xl leading-[10px]">{currentDate.date()}</span>
              <p className="text-[12px]">30$</p>
            </div>
          );
        }}
      />
    </>
  );
};

export default DatePickerSelect;
