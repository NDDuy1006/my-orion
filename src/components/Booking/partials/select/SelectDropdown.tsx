import React, { useState } from 'react';
import { Button, Popover } from 'antd';

const buttonWidth = 70;
import './SelectDropdown.module.scss';

const SelectDropdown: React.FC = () => {
  const MAX = 4;
  const initialState: number = 0;
  const [adultValue, setAdultValue] = useState(initialState);
  const [childrenValue, setChildrenValue] = useState(initialState);

  const handleIncrease = (mode: string) => {
    mode === 'children'
      ? setChildrenValue((prevState) => prevState + 1)
      : setAdultValue((prevState) => prevState + 1);
  };
  const handleDescrease = (mode: string) => {
    mode === 'children'
      ? setChildrenValue((prevState) => prevState - 1)
      : setAdultValue((prevState) => prevState - 1);
  };

  const content = (
    <div>
      <div className="flex items-center justify-around gap-5">
        <p>Adults</p>
        <button
          disabled={adultValue <= 0}
          onClick={() => handleDescrease('adult')}
          className="w-10 h-10 border border-[#00b96b] rounded-[50%] disabled:cursor-not-allowed"
        >
          -
        </button>
        <p>{adultValue}</p>
        <button
          disabled={adultValue === MAX}
          onClick={() => handleIncrease('adult')}
          className="w-10 h-10 border border-[#00b96b] rounded-[50%] disabled:cursor-not-allowed"
        >
          +
        </button>
      </div>
      <div className="flex items-center justify-around gap-5">
        <p>Children</p>
        <button
          disabled={childrenValue <= 0}
          onClick={() => handleDescrease('children')}
          className="w-10 h-10 border border-[#00b96b] rounded-[50%] disabled:cursor-not-allowed"
        >
          -
        </button>
        <p>{childrenValue}</p>
        <button
          disabled={childrenValue + adultValue === MAX}
          onClick={() => handleIncrease('children')}
          className="w-10 h-10 border border-[#00b96b] rounded-[50%] disabled:cursor-not-allowed"
        >
          +
        </button>
      </div>
    </div>
  );
  return (
    <Popover placement="bottomLeft" content={content} trigger="click">
      <Button>{'Guests & Rooms'}</Button>
    </Popover>
  );
};

export default SelectDropdown;
