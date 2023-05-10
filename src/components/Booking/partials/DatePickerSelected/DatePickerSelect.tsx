import React from 'react';
import { DatePicker } from 'antd';
import { Dayjs } from 'dayjs';
import DateRender from './DateRender';


const { RangePicker } = DatePicker;




const DatePickerSelect = () => {


  return (
    <>
      <RangePicker
        placement="bottomLeft"
        // panelRender={(panelNode) => <div className='w-full'>{panelNode}</div>}
        renderExtraFooter={() => <div>kdks</div>}
        size={'large'}
        onOpenChange={(value) => {
          console.log(value)
        }}
        dateRender={(currentDate: Dayjs, today: Dayjs) => <DateRender currentDate={currentDate} today={today} />}
      />
    </>
  );
};

export default DatePickerSelect;