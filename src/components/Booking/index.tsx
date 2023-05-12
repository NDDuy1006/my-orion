import React, { Fragment } from 'react';
import DatePickerSelect from './partials/DatePickerSelected/DatePickerSelect';
import Locations from './partials/Locations/Locations';
import SelectDropdown from './partials/select/SelectGuestDropdown';
import styles from './Booking.module.scss';
import SearchButton from './partials/SearchButton/SearchButton';
import { Wrapper } from '../global/Wrapper';
import clsx from 'clsx';
const BookingFeature = () => {
  return (
    <div className={styles.bookingEngineBg}>
      <Wrapper>
        <h1 className="text-[#20272C] text-5xl text-center pt-[16.5rem] pb-12">
          A holiday in the Sonnenhotels is when the sun comes into your heart
        </h1>
        <div className="flex flex-row gap-2">
          <Locations />
          <DatePickerSelect />
          <SelectDropdown />
          <SearchButton />
        </div>
      </Wrapper>
    </div>
  );
};

export default BookingFeature;
