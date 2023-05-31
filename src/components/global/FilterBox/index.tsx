import React, { Key, useEffect, useMemo, useState } from 'react';
import FilterBoxProps, { FilterBoxData } from './@types';
import clsx from 'clsx';
import { defaultTheme } from '@/config';
import { Typography } from 'antd';
import BoxContent from '../BoxContent';
const { Title, Text } = Typography;

const FilterBox = ({ data, className, onClick, title }: FilterBoxProps) => {
  const [selectFill, setSelectFill] = useState<string[]>([]);

  const handleSelected = (value: any) => {
        if (selectFill.length <= 0) {
          setSelectFill([...selectFill, value]);
        } else {
            for (let idx in selectFill) {
                if (selectFill[idx] !== value) {
                    setSelectFill([...selectFill, value])
                  } else if(selectFill[idx] === value) {
                    const data = selectFill.filter((ele: any) => ele !== value);
                    setSelectFill(data)
                  }
            }
          
        }
    }

  useEffect(() => {
    onClick && onClick(selectFill);
  },[selectFill])


  return (
    <section
      style={{ background: defaultTheme.components?.Layout?.colorBgHeader }}
      className={clsx('my-2 p-6 rounded-[10px]', className)}
    >
      <Title className="font-[lora] mb-4 text-[20px]" level={4}>
        {title}
      </Title>
      {data.map((ele: FilterBoxData, index: Key) => {
        return (
          <BoxContent
            onClick={() => handleSelected(ele.value)}
            style="box"
            key={index}
            icon={ele.icon}
            label={ele.label}
          />
        );
      })}
    </section>
  );
};

export default FilterBox;
