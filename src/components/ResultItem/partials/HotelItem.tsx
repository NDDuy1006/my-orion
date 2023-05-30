import React from 'react';
import { Typography } from 'antd';
const { Title, Text } = Typography;
import { HotelItemProps } from '../@types';
import CardItem from '@/components/global/CardItem';
import TagName from '@/components/global/TagName';
import BoxContent from '@/components/global/BoxContent';
import { SunSineIcon } from '@/library';

const HoteltItem = ({ data }: HotelItemProps) => {
  const dataBox = [
    {
      label: '2N in Double Room “Weingarten',
      value: '1',
      icon: <SunSineIcon />,
    },
    {
      label: '2N in Double Room “Weingarten',
      value: '1',
      icon: <SunSineIcon />,
    },
    {
      label: '2N in Double Room “Weingarten',
      value: '1',
      icon: <SunSineIcon />,
    },
  ];

  return (
    <>
      <CardItem
        height="600px"
        title={
          <div className="flex justify-between mb-6">
            <Title level={1} className="!text-[20px] !font-[400] !font-[lora]">
              {data.name}
            </Title>
            <div className="flex flex-col">
              <TagName
                className="m-0"
                content={
                  <div className="flex items-center justify-center gap-1">
                    <span className="inline-block">€403.10</span>
                  </div>
                }
              />
              <Text className="text-MidGrey text-[12px]">per person</Text>
            </div>
          </div>
        }
        content={dataBox.map((ele, index) => {
          return (
            <BoxContent 
            label={ele.label}
            icon={ele.icon}
            key={index} 
            className="px-0 py-2 border-l-0 border-r-0 rounded-none border-b-0 last-of-type:border-b-1 flex-row-reverse !justify-end gap-6" />
          );
        })}
        image={data.img}
      />
    </>
  );
};

export default HoteltItem;
