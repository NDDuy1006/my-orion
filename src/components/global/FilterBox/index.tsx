import React, {  Key, useState } from 'react';
import FilterBoxProps, { FilterBoxData } from './@types';
import clsx from 'clsx';
import { defaultTheme } from '@/config';
import { Typography } from 'antd';
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
                    <div
                        key={index}
                        onClick={() => handleSelected(ele?.value)}
                        className={clsx(
                            'mt-2 first-of-type:mt-0 flex justify-between items-center px-3 h-10 border border-solid border-LightGrey rounded-md hover:border-Blue transition-all duration-300',
                            {
                                '!border-Blue outline-1 outline  outline-Sea': selectFill.find(
                                    (e: any) => e === ele.value
                                ),
                            }
                        )}
                    >
                        <p>{ele.label}</p>
                        {ele?.icon}
                    </div>
                );
            })}
        </section>
    );
};

export default FilterBox;
