import React from 'react';
import DatePickerSelect from './partials/DatePickerSelect';
import SelectDropdown from './partials/select/SelectDropdown';

type Props = {};

const BookingFeature = (props: Props) => {
  return (
    <div>
      <SelectDropdown />
      <br />
      <DatePickerSelect />
    </div>
  );
};

export default BookingFeature;
