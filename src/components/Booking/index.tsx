import React, { Fragment } from 'react';
import DatePickerSelect from './partials/DatePickerSelected/DatePickerSelect';
import Locations from './partials/Locations/Locations';
import SelectDropdown from './partials/select/SelectDropdown';
import styles from './Booking.module.scss';
import SearchButton from './partials/SearchButton/SearchButton';
import { Wrapper } from '../global/Wrapper';
const BookingFeature = () => {
  return (
    <div className={styles.bookingEngineBg}>
      <Wrapper className={styles.bookingEngine}>
        <Locations />
        <DatePickerSelect />
        <SelectDropdown />
        <SearchButton />
      </Wrapper>
    </div>
  );
};

export default BookingFeature;
