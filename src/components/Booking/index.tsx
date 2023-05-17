import React, { useEffect, useState } from 'react';
import DatePickerSelect from './partials/DatePickerSelected/DatePickerSelect';
import Locations from './partials/Locations/Locations';
import SelectDropdown from './partials/SelectGuestDropdown/SelectGuestDropdown';
import styles from './Booking.module.scss';
import SearchButton from './partials/SearchButton/SearchButton';
import { Wrapper } from '../global/Wrapper';
import clsx from 'clsx';
import SectionDraft from './partials/SectionDraft/SectionDraft';

const BookingFeature = () => {
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () =>
      window.scrollY > 489 ? setFixed(true) : setFixed(false)
    );
  },[]);

  return (
    <div>
      <div className={clsx(styles.bookingEngineBg)}>
        <Wrapper>
          <h1 className={clsx('text-Main text-5xl text-center pt-[16.5rem] pb-12')}>
            A holiday in the Sonnenhotels is when the sun comes into your heart
          </h1>
        </Wrapper>
        <div
          className={clsx(
            `flex flex-row gap-2 justify-center `,
            fixed && styles.fixed,
            fixed && 'bg-Main'
          )}
        >
          <Locations />
          <DatePickerSelect />
          <SelectDropdown />
          <SearchButton />
        </div>
      </div>
      <Wrapper>
        <SectionDraft />
        <SectionDraft />
        <SectionDraft />
        <SectionDraft />
      </Wrapper>
    </div>
  );
};

export default BookingFeature;
