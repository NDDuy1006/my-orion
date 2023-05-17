import React, { useEffect, useState } from 'react'
import CheckBoxProps from './@types'
import CheckBoxLabel from './partials/CheckBoxLabel'
import { UpOutlined } from '@ant-design/icons';
import clsx from 'clsx';



const CheckBox = ({data, cb}: CheckBoxProps) => {
  const [showAllLabel, setShowAllLabel] = useState<Boolean>(false);
  const [listData, setListData] = useState<any[]>([]);
  const [showContent, setShowContent] = useState<Boolean>(false);

  const handleShowAllBox = () => setShowAllLabel(current => !current);

  const handleShowContent = () => setShowContent(current => !current);

  const handleChecked = (value: any) => {
    if (value.checked) {
      setListData([...listData, value.value])
    } else {
      const dataFil = listData.filter((ele: any) => ele !== value.value);
      setListData(dataFil)
    }

    cb && cb(listData);
  };

  useEffect(() => {
    if(data?.content?.length === 0) {
      setShowContent(true)
    }
  },[])


  return (
    <div className='border-b border-gray-400 border-solid border-lineGray py-4'>
      <div onClick={handleShowContent} className={clsx('flex justify-between items-center cursor-pointer',{'mb-4': !showContent && data?.content?.length !== 0 })}>
        <h4 className='!text-[16px] font-medium '>{data?.title}</h4>
        <UpOutlined className={clsx('text-[14px] transition-all duration-150', {'-rotate-180': showContent})} />
      </div>
      <div>

        {
          showAllLabel ? data?.content?.map((ele: any, index: number) => {
            const foundIndex = listData.findIndex((val: string) => val === ele.value);
            return (
              !showContent && <div key={index} className='flex justify-between items-center mt-2 first-of-type:mt-0 text-[16px]'>
                <CheckBoxLabel
                  onCheck={listData[foundIndex]}
                  onChange={handleChecked}
                  label={ele.label} value={ele.value} />
                <span className='text-[16px] text-[#74818C]'>165</span>
              </div>
            )
          }) : data?.content?.slice(0, 5).map((ele: any, index: number) => {
            const foundIndex = listData.findIndex((val: string) => val === ele.value);
            return (
              !showContent && <div key={index} className='flex justify-between items-center mt-2 first-of-type:mt-0 text-[16px]'>
                <CheckBoxLabel
                  onCheck={listData[foundIndex]}
                  onChange={handleChecked}
                  label={ele.label} value={ele.value} />
                <span className='text-[16px] text-[#74818C]'>165</span>
              </div>
            )
          })
        }

        {
          data?.content && !showContent && data.content.length > 5 && !showAllLabel ?
            <span onClick={handleShowAllBox}
              className='mt-3 cursor-pointer text-[10px] leading-[15px]'>
              +{data.content.length - 5} more
            </span>
            : data?.content && !showContent && data.content.length > 5 && <span onClick={handleShowAllBox}
              className='mt-3 cursor-pointer text-[10px] leading-[15px]'>less
            </span>
        }

      </div>
    </div>
  )
}

export default CheckBox