import React, { Fragment } from 'react';
import DatePickerSelect from './partials/DatePickerSelected/DatePickerSelect';
import Locations from './partials/Locations/Locations';
import SelectDropdown from './partials/select/SelectDropdown';
import styles from './Booking.module.scss';
import SearchButton from './partials/SearchButton/SearchButton';
import { Wrapper } from '../global/Wrapper';
import clsx from 'clsx';
const BookingFeature = () => {
  return (
    <div className={styles.bookingEngineBg}>
      <Wrapper>
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
