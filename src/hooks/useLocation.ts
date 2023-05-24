import { fetcherLocation } from '@/clientApi';
import useSWR from 'swr';

const TIME = 60 * 60 * 1000;

export const useLocation = () => {
    const { data, error, mutate, isLoading } = useSWR('/location');

    if (error) {
        mutate();
    }

    return [data, error, mutate, isLoading] as const;
};
