import DatePickerSelect from '@/components/Booking/partials/DatePickerSelected/DatePickerSelect';
import Locations from '@/components/Booking/partials/Locations/Locations';
import SearchButton from '@/components/Booking/partials/SearchButton/SearchButton';
import SelectGuestDropdown from '@/components/Booking/partials/SelectGuestDropdown/SelectGuestDropdown';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import styles from './SearchMenu.module.scss';

const SearchMenu = () => {
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () =>
      window.scrollY > 489 ? setFixed(true) : setFixed(false)
    );
  }, []);
  return (
    <div
      className={clsx(
        `flex flex-row gap-2 justify-center `,
        fixed && styles.fixed,
        fixed && 'bg-Main'
      )}
    >
      <Locations />
      <DatePickerSelect />
      <SelectGuestDropdown />
      <SearchButton />
    </div>
  );
};

export default SearchMenu;
