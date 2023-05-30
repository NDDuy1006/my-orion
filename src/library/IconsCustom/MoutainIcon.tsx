import clsx from 'clsx';
import React from 'react';

interface MoutainIconProps {
    className?: string;
    height?: number;
    width?: number;
}

const MoutainIcon = ({className, height, width}: MoutainIconProps) => {
    return (
        <span className={clsx(className, 'inline-flex items-center justify-center')}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={ width ||"22"}
                height={height || "20"}
                viewBox="0 0 22 20"
                fill='currentColor'
                
            >
                <path
                    d="M19.523 0.0292969H18.5998C17.5449 0.0292969 16.6529 0.690918 16.3781 1.59149H15.216C14.29 1.59149 13.5366 2.29218 13.5366 3.15353C13.5366 4.01489 14.29 4.71573 15.216 4.71573H19.523C20.7962 4.71573 21.832 3.75214 21.832 2.56775V2.17728C21.832 0.992889 20.7962 0.0292969 19.523 0.0292969Z"
                />
                <path
                    d="M5.21247 1.27716C4.98119 0.556336 4.26207 0.0292969 3.41288 0.0292969H3.26377C2.41475 0.0292969 1.69563 0.556336 1.46434 1.27716C0.815598 1.48926 0.349091 2.06512 0.349091 2.74033V2.79709C0.349091 3.65204 1.09675 4.34753 2.01582 4.34753H4.661C5.58007 4.34753 6.32773 3.65204 6.32773 2.79709V2.74033C6.32773 2.06528 5.86155 1.48941 5.21247 1.27716Z"
                />
                <path
                    d="M17.7135 14.3616L18.8719 13.1532L17.0069 8.70209L16.2776 10.1321L15.1602 7.94098L14.2647 9.45862L15.7602 13.4937L17.7135 14.3616Z"
                />
                <path
                    d="M8.85973 11.3312L11.1941 13.4518L13.2476 10.3085L11.6438 5.98159L10.8414 6.83517L8.72883 2.85232L5.63092 8.61602L4.42463 8.29589L3.43273 11.3428L6.34118 13.0411L8.85973 11.3312Z"
                />
                <path
                    d="M21.8261 19.191V18.0194H20.9108L19.3852 14.3781L18.024 15.7979L16.3363 15.0479L17.4376 18.0194H16.1055L13.781 11.7479L11.4477 15.3197L8.74179 12.8616L6.39433 14.4554L3.05431 12.505L1.25898 18.0194H0.332031V19.191H21.8261Z"
                />
            </svg>
        </span>
    );
};

export default MoutainIcon;
