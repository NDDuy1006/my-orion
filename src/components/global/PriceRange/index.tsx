import React, { useState, useEffect } from 'react';
import PriceRangeProps from './@types';
import { Form, Input, Slider, Typography } from 'antd';
import {defaultTheme} from '@/config/index';
import clsx from 'clsx';
const {Title, Text} = Typography;

const PriceRange = ({ value, className, onChange }: PriceRangeProps) => {
    const [rangeData, setRangeData] = useState<{ min: number; max: number }>({
        min: 0,
        max: 0,
    });
    
    useEffect(() => {
        onChange && onChange(rangeData)
    },[rangeData])

    useEffect(() => {
        setRangeData({ ...rangeData, min: value?.min, max: value?.max });
    }, []);

    return (
        <section className={clsx("p-6 rounded-[10px]", className)} style={{background: defaultTheme.components?.Layout?.colorBgHeader}}>
            <Title level={5} className="font-[lora] !text-[20px] mb-6">Price Range</Title>
            <div>
                <Form className="flex gap-3 mb-6">
                    <div>
                        <label htmlFor="min" className='mb-1 inline-block'>min</label>
                        <Input
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                Number(e.target.value) <= rangeData.max 
                                && setRangeData({ ...rangeData, min: Number(e.target.value) });
                            }}
                            name="min"
                            value={rangeData.min}
                            style={{ background: defaultTheme.components?.Layout?.colorBgTrigger, border: 'none' }}
                            height={50}
                        />
                    </div>
                    <div className="text-right">
                        <label htmlFor="max" className='mb-1 inline-block'>max</label>
                        <Input
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                Number(e.target.value) <= value.max 
                                && setRangeData({ ...rangeData, max: Number(e.target.value) });
                            }}
                            name="max"
                            value={rangeData.max}
                            style={{ background: defaultTheme.components?.Layout?.colorBgTrigger, border: 'none' }}
                            height={50}
                        />
                    </div>
                </Form>
                <Slider
                    onChange={(e: number[]) => {
                        setRangeData({ ...rangeData, min: e[0], max: e[1] });
                    }}
                    range={{ draggableTrack:true }}
                    max={value?.max}
                    value={[rangeData.min, rangeData.max]}
                    trackStyle={[{ background: '#3A6EA5' }]}
                />
            </div>
        </section>
    );
};

export default PriceRange;
