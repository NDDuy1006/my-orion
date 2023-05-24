import useSWR from 'swr';

export const useLocation = () => {
    const { data, error, mutate, isLoading } = useSWR('http://localhost:3000/api/location');

    if (error) {
        mutate();
    }

    return [data, error, mutate, isLoading] as const;
};
