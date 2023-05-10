import React, { useState, useEffect } from 'react';
import { Button, Popover } from 'antd';

const buttonWidth = 70;
import './SelectDropdown.module.scss';

const SelectDropdown: React.FC = () => {
  const MAX = 4;
  const [adultValue, setAdultValue] = useState(0);
  const [childrenValue, setChildrenValue] = useState(0);

  // useEffect(() => {
  //   if (adultValue + childrenValue > MAX) {
  //     const diff = adultValue + childrenValue - MAX;
  //     if (adultValue > diff) {
  //       setAdultValue(adultValue + diff);
  //       setChildrenValue(childrenValue - diff);
  //     } else {
  //       setAdultValue(1);
  //       setChildrenValue(childrenValue - (diff - adultValue));
  //     }
  //   }
  // }, [adultValue, childrenValue]);

  const handleIncrease = (mode: string) => {
    if (mode === 'children' && adultValue + childrenValue < MAX) {
      setChildrenValue(childrenValue + 1);
    } else if (mode === 'adult' && adultValue < MAX) {
      if (adultValue + childrenValue >= MAX) {
        setChildrenValue(childrenValue - 1);
      }
      setAdultValue(adultValue + 1);
    }
  };

  const handleDescrease = (mode: string) => {
    if (mode === 'children' && childrenValue > 0) {
      setChildrenValue(childrenValue - 1);
    } else if (mode === 'adult' && adultValue > 0) {
      setAdultValue(adultValue - 1);
    }
  };

  const content = (
    <div>
      <div className="flex items-center justify-around gap-5">
        <p>Adults</p>
        <button
          disabled={adultValue <= 0}
          onClick={() => handleDescrease('adult')}
          className="w-10 h-10 border border-[#00b96b] rounded-[50%] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          -
        </button>
        <p>{adultValue}</p>
        <button
          disabled={adultValue === MAX}
          onClick={() => handleIncrease('adult')}
          className="w-10 h-10 border border-[#00b96b] rounded-[50%] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          +
        </button>
      </div>
      <div className="flex items-center justify-around gap-5">
        <p>Children</p>
        <button
          disabled={childrenValue <= 0}
          onClick={() => handleDescrease('children')}
          className="w-10 h-10 border border-[#00b96b] rounded-[50%] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          -
        </button>
        <p>{childrenValue}</p>
        <button
          disabled={adultValue + childrenValue === MAX || adultValue === 0}
          onClick={() => handleIncrease('children')}
          className="w-10 h-10 border border-[#00b96b] rounded-[50%] disabled:opacity-50 disabled:cursor-not-allowed"
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
