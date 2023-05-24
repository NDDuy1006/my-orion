import { PublicConfiguration } from 'swr/_internal';
import useSWR from 'swr';


export const useLocation = (option?: Partial<PublicConfiguration>) => {
    const TIME_REFRESH =  30 * 60 * 1000; // calc with 30 min

    const { data, error, mutate, isLoading } = useSWR('/location',{
        dedupingInterval: TIME_REFRESH,
        revalidateOnFocus: false,       
        option,  
    });

    if (error) {
        mutate();
    }

    return {data, error, isLoading} as const;
};
