import { userPath } from '@/constants'
import useSWR from 'swr'
import { PublicConfiguration } from 'swr/_internal'

export const userFetchProfile = (options?:  Partial<PublicConfiguration>) => {

    // const { data, } = useSWR('/profile',{
    //     dedupingInterval: 60 * 60 * 1000,
    //     revalidateOnFocus: false,
    //     ...options

    // })


}