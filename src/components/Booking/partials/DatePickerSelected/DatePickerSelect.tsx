import React, { useEffect, useState } from 'react';
import { DatePicker } from 'antd';
import { Dayjs } from 'dayjs';
import DateRender from './DateRender';
import DateFooter from './DateFooter';

const { RangePicker } = DatePicker;
export interface DatePickerSelectProps {
    onClick?: (value: any) => void;
}
const DatePickerSelect = ({ onClick }: DatePickerSelectProps) => {
    const [showPrice, setShowPrice] = useState<boolean>(true);
    const [isFocused, setIsFocused] = useState(false);
    const [selectedRange, setSelectedRange] = useState<any>([]);

    const handleShowPrice = (checked: boolean) => {
        setShowPrice(checked);
    };

    const handleRangeChange = (dates: any, dateStrings: any) => {
        setSelectedRange(dates);
        setIsFocused(!isFocused);
    };

    const handleFocusChange = (event: any) => {
        setIsFocused(event.target === document.activeElement);
    };

    const handleScroll = () => {
        setIsFocused(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <RangePicker
            open={isFocused}
            value={selectedRange}
            onChange={handleRangeChange}
            onFocus={handleFocusChange}
            onBlur={handleFocusChange}
            onClick={() => setIsFocused(true)}
            className="rounded-[32px] h-12 w-[360px]"
            placement="bottomLeft"
            renderExtraFooter={() => <DateFooter onChange={handleShowPrice} />}
            panelRender={(panalNode: React.ReactNode) => {
                return <div className="w-[40vw]">{panalNode}</div>;
            }}
            dateRender={(currentDate: Dayjs, today: Dayjs) => (
                <DateRender showPrice={showPrice} currentDate={currentDate} today={today} />
            )}
        />
    );
};

export default DatePickerSelect;
