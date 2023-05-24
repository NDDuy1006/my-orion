import axios from 'axios';
import React from 'react';
import { SWRConfig } from 'swr';

interface SWRConfigX {
    children?: React.ReactNode | React.ReactElement;
}

const SWRConfigX = ({ children }: SWRConfigX) => {
    return (
        <SWRConfig value={{ fetcher: (url)=> axios.get(url), shouldRetryOnError: false }}>
            {children}
        </SWRConfig>
    );
};

export default SWRConfigX;
