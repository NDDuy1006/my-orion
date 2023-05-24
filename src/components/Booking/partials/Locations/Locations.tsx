import { useLocation } from '@/hooks/useLocation';
import { TreeSelect } from 'antd';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Locations = () => {
  const [valueSearch, setValueSearch] = useState<any>([]);
  const [data] = useLocation();

  // useEffect(() => {
  //     const locationData = data?.length
  //         ? data?.map((location: any) => {
  //               const child = location?.children.length
  //                   ? location.children?.map((children: any) => {
  //                         return {
  //                             ...children,
  //                             value: `${children.value}@${children.title}`,
  //                         };
  //                     })
  //                   : [];
  //               return {
  //                   ...location,
  //                   children: child,
  //               };
  //           })
  //         : [];
  //     setLocationData(locationData);
  // }, [data?.data]);

  const handleSearch = (value: any) => {
    for (let item of data) {
      const res = item.children.filter((ele: any) => {
        const keyWord = value.toLowerCase();
        const title = ele.title.toLowerCase();

        if (title.includes(keyWord)) {
          return ele;
        }
      });
      console.log(res);
    }
  };

  return (
    <TreeSelect
      value={valueSearch}
      className="mySelectIBE !w-[360px]"
      treeDefaultExpandAll
      switcherIcon={
        <Image alt="" width={0} height={0} src={require('/public/images/icons/location.svg')} />
      }
      suffixIcon={
        <Image alt="" width={0} height={0} src={require('/public/images/icons/location.svg')} />
      }
      showSearch
      placeholder="Where would you like to go?"
      treeData={data}
      onSearch={handleSearch}
      onChange={(value: string) => {
        setValueSearch(valueSearch);
      }}
    />
  );
};

export default Locations;
