import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Dropdown, message, Space, Tooltip } from 'antd';
import React from 'react';

const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  message.info('Click on left button.');
  console.log('click left button', e);
};

const handleMenuClick: MenuProps['onClick'] = (e) => {
  message.info('Click on menu item.');
  console.log('click', e);
};

const items: MenuProps['items'] = [
  {
    label: '1st menu item',
    key: '1',
  },
  {
    label: '2nd menu item',
    key: '2',
  },
  {
    label: '3rd menu item',
    key: '3',
    danger: true,
  },
];

const menuProps = {
  items,
  onClick: handleMenuClick,
};

const SelectDropdown: React.FC = () => (
  <Dropdown menu={menuProps}>
    <Button>
      <Space>
        Button
        <DownOutlined />
      </Space>
    </Button>
  </Dropdown>
);

export default SelectDropdown;
