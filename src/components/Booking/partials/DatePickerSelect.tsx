import React from 'react';
import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
const { RangePicker, TimePicker } = DatePicker;


type Props = {}

const DatePickerSelect = (props: Props) => {
    return (
        <Space direction="vertical" size={24}>
            <RangePicker
                placement='bottomRight'
                panelRender={ 
                    (panelNode) => <div>{panelNode}</div>}
                    
            />
        </Space>
    )
}

export default DatePickerSelect