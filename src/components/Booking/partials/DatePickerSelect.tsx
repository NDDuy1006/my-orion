import React from 'react';
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;

type Props = {}

const DatePickerSelect = (props: Props) => {
    return (
        <Space direction="vertical" size={12}>
            <RangePicker />
        </Space>
    )
}

export default DatePickerSelect