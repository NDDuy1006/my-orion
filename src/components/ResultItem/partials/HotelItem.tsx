import React from 'react';
import { Avatar, Typography } from 'antd';
import { HotelItemProps } from '../@types';
import CardItem from '@/components/global/CardItem';
import TagName from '@/components/global/TagName';
import BoxContent from '@/components/global/BoxContent';
import { BuffetIcon, SunSineIcon } from '@/library';
import LotusIcon from '@/library/IconsCustom/LotosIcon';
import { StarIcon } from '@heroicons/react/24/outline';
import { StarFilled } from '@ant-design/icons';
import ButtonShare from '@/components/global/ButtonShare';
import { BtnConstClassName } from '@/components/global/ButtonShare';

const { Title, Text } = Typography;

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
      icon: <BuffetIcon />,
    },
    {
      label: '2N in Double Room “Weingarten',
      value: '1',
      icon: <LotusIcon />,
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
        content={
          <>
            {dataBox.map((ele, index) => {
              return (
                <BoxContent
                  label={ele.label}
                  icon={ele.icon}
                  key={index}
                  height="auto"
                  className="!px-0 !py-3 border-l-0 border-r-0 rounded-none border-b-0 last-of-type:border-b-1 flex-row-reverse !justify-end gap-6 !mt-0"
                />
              );
            })}
            <div className="flex justify-between items-center pt-6">
              <div className='flex items-center gap-3'>
                <Avatar size={60} />
                <div>
                  <p className='w-[100px] flex-wrap'>Weingut Rommert</p>
                  <StarFilled className="text-Blue" />
                  <StarFilled className="text-Blue" />
                  <StarFilled className="text-Blue" />
                  <StarFilled className="text-Blue" />
                </div>
              </div>
              <ButtonShare
                content="see details"
                size="small"
                style={BtnConstClassName.outline}
                className="!font-[500]"
              />
            </div>
          </>
        }
        image={data.img}
      />
    </>
  );
};

export default HoteltItem;
