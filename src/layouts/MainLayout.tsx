import { LayoutProps } from '@/types/layoutType';
import React from 'react';


const MainLayout = ({ children }: LayoutProps) => {
    return (
        <div>
            <header className='w-ful h-9 bg-teal-200 container'>
                Header
            </header>

            <div>
                {children}
            </div>

            <div className='w-ful h-9 bg-teal-200 container'>
                Footer
            </div>

        </div>
    )
}

export default MainLayout