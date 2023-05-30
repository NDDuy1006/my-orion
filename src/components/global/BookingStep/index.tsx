import React from 'react';
import BookingStepProps, { BookingStepData } from './@types';
import clsx from 'clsx';
import { Typography } from 'antd';
const {Title, Text}  = Typography;

const BookingStep = ({ data, activeStep, className }: BookingStepProps) => {
    return (
        <section className="bg-White">
            <div className="container">
                <div className={clsx('flex justify-start gap-12 items-center h-[60px]', className)}>
                    {data.map((ele: BookingStepData, index: number) => {
                        return (
                            <div key={index} className="flex justify-center gap-4 items-center">
                                <Title level={5}
                                    className={clsx(
                                        'w-[25px] h-[25px] !text-[16px] !font-[500] text-Black bg-LightGrey flex items-center justify-center rounded-full',
                                        {
                                            '!bg-Blue !text-White': activeStep === ele.step,
                                        }
                                    )}
                                >
                                    {ele.step}
                                </Title>
                                <p className="text-[16px]">{ele.stepName}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default BookingStep;
