import React, { useEffect, useState } from 'react';
import { DatePicker } from 'antd';
import { Dayjs } from 'dayjs';
import DateRender from './DateRender';
import DateFooter from './DateFooter';

const { RangePicker } = DatePicker;

const DatePickerSelect = () => {
    const [showPrice, setShowPrice] = useState<boolean>(true);
    const handleShowPrice = (checked: boolean) => {
        setShowPrice(checked);
    };

    const [show, setShow] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setShow(false);
        };
        window.addEventListener('scroll', handleScroll);
    }, []);

    return (
        <RangePicker
            open={show}
            onBlur={(show) => {
                setShow(false);
            }}
            onClick={() => setShow(true)}
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
