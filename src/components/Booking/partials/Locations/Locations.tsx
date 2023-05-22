import { TreeSelect } from 'antd';
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Locations = () => {
  const [valueSearch, setValueSearch] = useState();
  const [locationData, setLocationData] = useState<any>([]);
  const fetcher = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/location');
      const locationData = res?.data?.data?.length
        ? res.data?.data?.map((location: any) => {
            const child = location?.children.length
              ? location.children.map((children: any) => {
                  return {
                    ...children,
                    value: `${children.value}@${children.title}`,
                  };
                })
              : [];
            return {
              ...location,
              children: child,
            };
          })
        : [];
      setLocationData(locationData);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSearch = (value: string) => {
    console.log(value, 'Diuuuuuuu');
  };

  useEffect(() => {
    fetcher();
  }, []);

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
      treeData={locationData}
      onChange={(value: string) => {
        const search = setValueSearch(valueSearch);
        console.log(value, 'NNNNN');
      }}
    />
  );
};

export default Locations;
