import DatePickerSelect from '@/components/Booking/partials/DatePickerSelected/DatePickerSelect';
import Locations from '@/components/Booking/partials/Locations/Locations';
import SearchButton from '@/components/Booking/partials/SearchButton/SearchButton';
import SelectGuestDropdown from '@/components/Booking/partials/SelectGuestDropdown/SelectGuestDropdown';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { Button } from 'antd';

import React, { useEffect, useState } from 'react';

const SearchMenu = () => {
    const [fixed, setFixed] = useState(false);

    const router = useRouter();

    useEffect(() => {
        window.addEventListener('scroll', () =>
            window.scrollY > 400 ? setFixed(true) : setFixed(false)
        );
    }, []);

    const cb = (value: any) => {
        console.log(value);
    };
    return (
        <div
            className={clsx(
                `flex flex-row gap-2 justify-center `,
                (fixed || router.asPath !== '/') && 'fixed bg-Main'
            )}
        >
            <Locations onClick={cb} />
            <DatePickerSelect onClick={cb} />
            <SelectGuestDropdown />
            <Button
                htmlType="submit"
                onClick={cb}
                className="rounded-[32px] h-12 w-[146px] bg-[#20272c] text-[white]"
            >
                Search
            </Button>
            {/* <SearchButton onClick={cb} /> */}
        </div>
    );
};

export default SearchMenu;
