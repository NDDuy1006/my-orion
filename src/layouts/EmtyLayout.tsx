
import { LayoutProps } from '@/types/layoutType'
import React from 'react'


const EmtyLayout = ({ children }: LayoutProps) => {
    return (
        <>
            <header className='w-ful h-9 bg-teal-200'>
                Header
            </header>

            <div>
                {children}
            </div>

            <footer className='w-ful h-9 bg-teal-200'>
                Footer
            </footer>

        </>
    )
}

export default EmtyLayout