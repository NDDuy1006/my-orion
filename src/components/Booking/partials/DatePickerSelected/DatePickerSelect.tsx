import React, { useState } from 'react';
import { DatePicker } from 'antd';
import { Dayjs } from 'dayjs';
import DateRender, { DateRate } from './DateRender';
import DateFooter from './DateFooter';

const { RangePicker } = DatePicker;

const DatePickerSelect = () => {
  const [showPrice, setShowPrice] = useState<boolean>(true)

  const handleShowPrice = (checked: boolean) => {
    setShowPrice(checked)
  }

  return (
    <RangePicker
      className="rounded-[32px] h-12 w-[360px]"
      placement="bottomLeft"
      renderExtraFooter={() => <DateFooter onChange={handleShowPrice} />}
      panelRender={(panalNode: React.ReactNode) => {
        return <div className='w-[40vw]'>{panalNode}</div>
      }}
      onOpenChange={(value) => {
        console.log(value);
      }}
      dateRender={(currentDate: Dayjs, today: Dayjs) => (
        <DateRender showPrice={showPrice} currentDate={currentDate} today={today} />
      )}
    />
  );
};

export default DatePickerSelect;
