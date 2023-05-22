import  useSWR  from 'swr';



export function useLocation() {
    const {data, error, mutate,isLoading } = useSWR('/api/location')
}