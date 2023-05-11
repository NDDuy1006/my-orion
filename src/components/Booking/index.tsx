import React, { Fragment } from 'react';
import DatePickerSelect from './partials/DatePickerSelected/DatePickerSelect';
import Locations from './partials/Locations/Locations';
import SelectDropdown from './partials/select/SelectDropdown';
import styles from './Booking.module.scss';
import SearchButton from './partials/SearchButton/SearchButton';
const BookingFeature = () => {
  return (
    <section className={styles.bookingEngineBg}>
      <div className={styles.bookingEngine}>
        <Locations />
        <DatePickerSelect />
        <SelectDropdown />
        <SearchButton />
      </div>
    </section>
  );
};

export default BookingFeature;
