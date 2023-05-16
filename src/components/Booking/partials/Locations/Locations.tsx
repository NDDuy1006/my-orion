import { Select } from 'antd';
import { spawn } from 'child_process';
import Image from 'next/image';
import React from 'react';

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
  console.log('search:', value);
};
const Locations: React.FC = () => (
  <Select
    showSearch
    filterOption={(input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
    style={{ width: 200 }}
    onChange={handleChange}
    dropdownRender={() => (
      <div className="flex items-center ">
        <div className="relative w-4 h-4">
          <Image alt="" width={0} height={0} src={require('public/images/icons/location.svg')} />
        </div>
        <p>hello city</p>
      </div>
    )}
    options={[
      {
        label: 'Manager',
        options: [
          { label: 'Jack', value: 'jack' },
          { label: 'Lucy', value: 'lucy' },
        ],
      },
      {
        label: 'Engineer',
        options: [{ label: 'yiminghe', value: 'Yiminghe' }],
      },
    ]}
  />
);

export default Locations;
