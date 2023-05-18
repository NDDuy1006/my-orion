import clsx from 'clsx'
import React, { useEffect, useState } from 'react'

type Props = {}

const Recommended = (props: Props) => {
    const [showRecommen, setShowRecommen] = useState<Boolean>(false);

    const handleShow = () => setShowRecommen(current => !current);

    const handleClick = () => {
        setShowRecommen(current => !current);
    }

    return (
        <div className='flex justify-between items-center mb-7'>
            <p className='text-[14px] leading-[18px] text-Main'>3 results</p>
            <div className='flex items-center'>
                <span className='mr-2 text-[14px] leading-[24px] text-Main'>Sorted by</span>
                <div className='relative'>
                    <div
                        onClick={handleShow}
                        className='flex items-center cursor-pointer'>
                        <p className='mr-4 text-[14px] leading-[18px] font-medium'>Recommended</p>
                        <svg className={clsx(
                            { '-rotate-180': showRecommen }
                        )} xmlns="http://www.w3.org/2000/svg" width="11" height="7" viewBox="0 0 11 7" fill="none">
                            <path d="M1 1L5.5 5.5L10 1" stroke="#20272C"/>
                        </svg>
                    </div>

                    <ul className={clsx(
                        'absolute top-[103%] left-1/2 -translate-x-1/2  bg-white rounded-lg z-50 shadow-lg border border-solid border-lineGray whitespace-nowrap overflow-hidden',
                        {
                            'hidden': !showRecommen,
                        }
                    )}>
                        <li
                            onClick={handleClick}
                            className='py-1 px-4 cursor-pointer transition-all duration-150 hover:bg-[#ededed]'
                        >recommended 1</li>

                        <li
                            onClick={handleClick}
                            className='py-1 px-4 cursor-pointer transition-all duration-150 hover:bg-[#ededed]'
                        >recommended 1</li>

                        <li
                            onClick={handleClick}
                            className='py-1 px-4 cursor-pointer transition-all duration-150 hover:bg-[#ededed]'
                        >recommended 1</li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Recommended