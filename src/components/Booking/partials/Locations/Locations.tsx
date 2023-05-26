import { useLocation } from '@/hooks/useLocation';
import { TreeSelect } from 'antd';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export interface LocationProps {
    onClick?: (value: any) => void;
}

const Locations = ({ onClick }: LocationProps) => {
    const [locationData, setLocationData] = useState();
    const { data } = useLocation();

    useEffect(() => {
        const res = data?.map((location: any) => {
            const child = location.children?.map((children: any) => {
                return {
                    ...children,
                    value: `${children.value}@${children.title}`,
                };
            });
            return {
                ...location,
                children: child,
            };
        });
        setLocationData(res);
    }, [data]);

    return (
        <TreeSelect
            open={true}
            className="mySelectIBE !w-[360px]"
            treeDefaultExpandAll
            switcherIcon={
                <Image alt="" width={0} height={0} src={require('@/assets/icons/location.svg')} />
            }
            suffixIcon={
                <Image alt="" width={0} height={0} src={require('@/assets/icons/location.svg')} />
            }
            showSearch
            placeholder="Where would you like to go?"
            treeData={locationData}
            onChange={(value: string) => onClick && onClick(value.split('@')[0])}
        />
    );
};

export default Locations;
