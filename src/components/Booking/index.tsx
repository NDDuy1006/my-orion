import React, { Fragment } from 'react';
import DatePickerSelect from './partials/DatePickerSelected/DatePickerSelect';
import SelectDropdown from './partials/select/SelectDropdown';

const BookingFeature = () => {
  return (
    <Fragment>
      <SelectDropdown />
      <br />
      <DatePickerSelect />
    </Fragment>
  );
};
