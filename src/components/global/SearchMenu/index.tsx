import DatePickerSelect from '@/components/Booking/partials/DatePickerSelected/DatePickerSelect';
import Locations from '@/components/Booking/partials/Locations/Locations';
import SearchButton from '@/components/Booking/partials/SearchButton/SearchButton';
import SelectGuestDropdown from '@/components/Booking/partials/SelectGuestDropdown/SelectGuestDropdown';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const SearchMenu = (props: any) => {
  const [fixed, setFixed] = useState(false);

  const router = useRouter();

  useEffect(() => {
    window.addEventListener('scroll', () =>
      window.scrollY > 400 ? setFixed(true) : setFixed(false)
    );
  }, []);
  return (
    <div
      className={clsx(
        `flex flex-row gap-2 justify-center `,
        (fixed || router.asPath !== '/') && 'fixed bg-Main'
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
