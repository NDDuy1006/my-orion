import { TreeSelect } from 'antd';
import { TreeNode } from 'antd/es/tree-select';
import Image from 'next/image';
import React from 'react';

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
  console.log('search:', value);
};
const suffixIcon = () => {};
const Locations: React.FC = () => (
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
      treeData={[
        {
          title: 'Germany',
          value: 'germany',
          children: [
            { title: 'Sonnenhotel Weingut Römmert', value: 'SWR' },
            { title: 'Sun resort Ettershaus', value: 'SRE' },
            { title: 'Sonnenresort Hüttmann', value: 'SHN' },
            { title: 'Sonnenhotel Bayerischer Hof', value: 'SBH' },
            { title: 'Sonnenhotel Feldberg am See', value: 'SFS' },
            { title: 'Sonnenhotel Amtsheide', value: 'SAE' },
            { title: 'Sonnenhotel Wolfshof', value: 'SWF' },
            { title: 'Sonnenhotel Hoher Hahn', value: 'SHH' },
            { title: 'Sonnenhotel Fürstenbauer', value: 'SFR' },
          ],
        },
        {
          title: 'Austria',
          value: 'austria',
          children: [
            { title: 'Sonnenhotel Zum Stern', value: 'SZS' },
            { title: 'Sonnenresort Maltschacher See', value: 'SMS' },
            { title: 'Sonnenresort Ossiacher See', value: 'SOS' },
          ],
        },
      ]}
    />
  </div>
);

export default Locations;
