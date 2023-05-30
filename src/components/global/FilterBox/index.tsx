import React, {  Key, useState } from 'react';
import FilterBoxProps, { FilterBoxData } from './@types';
import clsx from 'clsx';
import { defaultTheme } from '@/config';
import { Typography } from 'antd';
import BoxContent from '../BoxContent';
const {Title, Text} = Typography;

const FilterBox = ({ data, className, onClick, title }: FilterBoxProps) => {
    const [selectFill, setSelectFill] = useState<string[]>([]);

    const handleSelected = (value: string) => {
        
    };

    return (
        <section
            style={{ background: defaultTheme.components?.Layout?.colorBgHeader }}
            className={clsx('my-2 p-6 rounded-[10px]', className)}
        >
            <Title className='font-[lora] mb-4 text-[20px]' level={4}>{title}</Title>
            {data.map((ele: FilterBoxData, index: Key) => {
                return (
                    <BoxContent  key={index} icon={ele.icon} label={ele.label}  />
                );
            })}
        </section>
    );
};

export default FilterBox;
