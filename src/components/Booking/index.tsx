import React, { useEffect, useState } from 'react';
import DatePickerSelect from './partials/DatePickerSelected/DatePickerSelect';
import Locations from './partials/Locations/Locations';
import SelectDropdown from './partials/SelectGuestDropdown';
import styles from './Booking.module.scss';
import SearchButton from './partials/SearchButton/SearchButton';
import { Wrapper } from '../global/Wrapper';
import clsx from 'clsx';
import SectionDraft from './partials/SectionDraft/SectionDraft';
import SearchMenu from '../global/SearchMenu';

const BookingFeature = () => {
  return (
    <div>
      <div className={clsx(styles.bookingEngineBg)}>
        <Wrapper>
          <h1 className={clsx('text-Main text-5xl text-center pt-[16.5rem]')}>
            A holiday in the Sonnenhotels is when the sun comes into your heart
          </h1>
        </Wrapper>
        <SearchMenu />
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
