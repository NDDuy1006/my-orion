import React, { Fragment } from 'react';
import DatePickerSelect from './partials/DatePickerSelected/DatePickerSelect';
import Locations from './partials/Locations/Locations';
import SelectDropdown from './partials/select/SelectDropdown';

const BookingFeature = () => {
  return (
    <section className="flex">
      <Locations />
      <DatePickerSelect />
      <SelectDropdown />
    </section>
  );
};

export default BookingFeature;
