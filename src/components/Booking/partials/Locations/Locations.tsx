import { TreeSelect } from 'antd';
import { TreeNode } from 'antd/es/tree-select';
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
  console.log('search:', value);
};

const Locations = () => {
  const [locationData, setLocationData] = useState<any>([]);
  const fetcher = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/location');
      console.log(res.data);
      setLocationData(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetcher();
  }, []);

  return (
    <div>
      <TreeSelect
        className="mySelectIBE !w-[360px]"
        treeDefaultExpandAll
        switcherIcon={
          <Image alt="" width={0} height={0} src={require('/public/images/icons/location.svg')} />
        }
        suffixIcon={
          <Image alt="" width={0} height={0} src={require('/public/images/icons/location.svg')} />
        }
        onSearch={onSearch}
        onChange={handleChange}
        showSearch
        placeholder="Where would you like to go?"
        treeData={locationData}
      />
    </div>
  );
};

export default Locations;
