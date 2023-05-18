import React from 'react';
import styles from '../DatePickerSelected/DatePicker.module.scss';
import { Switch } from 'antd'; 
import clsx from 'clsx';

interface DateFooterProps { 
  onChange?: (checked: boolean) => void;
}

const DateFooter = ({ onChange }: DateFooterProps) => {

  return (
    <div className={clsx('flex justify-between', styles.dateBottom)}>
      <div>
        <Switch defaultChecked onChange={onChange} />
      </div>

      <div className={styles.dateBottomItem}>
        <span className={styles.itemLow}>Low</span>
        <span className={styles.itemAverage}>Average</span>
        <span className={styles.itemHigh}>High</span>
        <span className='!text-Main !font-light'>Based on average prices of all rooms</span>
      </div>
    </div>
  );
};

export default DateFooter;
