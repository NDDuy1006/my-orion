import clsx from 'clsx';
import React from 'react';

interface MoutainIconProps {
    className?: string;
    height?: number;
    width?: number;
}

const MoutainIcon = ({ className, height, width }: MoutainIconProps) => {
    return (
        <span className={clsx(className, 'inline-flex items-center justify-center')}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={width || "26"}
                height={height || "15"}
                viewBox="0 0 26 15"
                fill="currentColor"
            >
                <path
                    d="M5.64739 14.5287C5.63998 14.6276 5.67396 14.7252 5.74114 14.798C5.80858 14.8705 5.90335 14.9119 6.00246 14.9119H7.50499C7.61151 14.9119 7.71216 14.8644 7.77985 14.7821C7.84754 14.6999 7.87488 14.5918 7.85444 14.4874C7.46591 12.5054 6.41092 10.9305 4.70199 9.75549C4.55664 9.65586 4.36046 9.67707 4.24014 9.80556C4.11983 9.9343 4.11165 10.1315 4.22073 10.2697C5.1434 11.4373 5.78278 12.7659 5.64739 14.5287ZM8.19316 12.3117C8.48054 12.9276 8.69332 13.589 8.83203 14.2958C8.87265 14.5027 8.8637 14.7134 8.80955 14.9119H9.26297C9.36208 14.9119 9.45685 14.8705 9.52403 14.798C9.59147 14.7252 9.62544 14.6276 9.61804 14.5287C9.48265 12.7659 10.122 11.4373 11.0447 10.2697C11.1538 10.1315 11.1456 9.9343 11.0253 9.80556C10.905 9.67707 10.7085 9.65586 10.5634 9.75549C9.53578 10.4621 8.74543 11.3142 8.19316 12.3117ZM7.63501 11.3104C8.23224 10.4018 9.01902 9.60861 9.99916 8.93474C10.5502 8.55566 11.2955 8.63664 11.7525 9.12479C12.2095 9.6132 12.241 10.3624 11.8264 10.8871C11.2026 11.6764 10.7213 12.5496 10.6173 13.6326C11.2593 13.6761 11.9183 13.6991 12.5904 13.6991C15.9906 13.6991 19.0642 13.1141 21.2681 12.1901C22.9053 11.5038 24.0834 10.6064 24.6771 9.64718C24.6773 9.64692 24.6773 9.64667 24.6776 9.64641C24.7233 9.57259 24.7675 9.47986 24.8201 9.38049C24.8265 9.36823 24.8326 9.35597 24.8385 9.34371C25.1195 8.75389 25.0781 8.06188 24.7297 7.50961C24.7297 7.50936 24.7294 7.50936 24.7294 7.5091C24.3805 6.95708 23.7733 6.6227 23.1204 6.6227H15.5863C15.2506 6.6227 14.9385 6.45028 14.7596 6.16648C14.5811 5.88217 14.5607 5.52608 14.7057 5.22337C14.7425 5.14674 14.7788 5.07138 14.8143 4.99756C15.1004 4.40135 15.0629 3.69887 14.7142 3.13485C14.3655 2.57083 13.7532 2.22368 13.0908 2.2132C12.9248 2.21065 12.758 2.20912 12.5904 2.20912C8.54951 2.20912 4.96995 3.03957 2.74859 4.28052C0.949236 5.28545 0 6.61325 0 7.95409C0 9.49876 1.30737 11.0424 3.6871 12.0931C3.86719 12.1728 4.06107 12.195 4.24602 12.1656C4.03374 11.7073 3.75454 11.2866 3.43906 10.8871C3.02448 10.3624 3.0559 9.6132 3.51289 9.12505C3.96988 8.63664 4.71501 8.55566 5.26626 8.93449C6.24769 9.60937 7.03752 10.4013 7.63501 11.3104ZM14.2996 10.7397C14.2996 10.7397 14.788 10.484 15.246 10.2442C15.5927 10.0628 16.0062 10.0628 16.3529 10.2442C16.5452 10.3448 16.7511 10.4526 16.9432 10.5532C17.5808 10.8869 18.3412 10.8869 18.9788 10.5532C19.4369 10.3136 19.9253 10.0579 19.9253 10.0579C20.1702 9.9297 20.265 9.627 20.1368 9.38203C20.0085 9.13731 19.7058 9.04254 19.4609 9.17077C19.4609 9.17077 18.9727 9.42647 18.5144 9.66608C18.1678 9.84745 17.7542 9.84745 17.4076 9.66608C17.2152 9.56544 17.0096 9.45764 16.8173 9.35699C16.1797 9.02338 15.4192 9.02338 14.7816 9.35699C14.3236 9.59686 13.8352 9.85256 13.8352 9.85256C13.5905 9.98054 13.4957 10.2835 13.6237 10.5282C13.7519 10.7732 14.0546 10.8677 14.2996 10.7397ZM5.74344 7.64398C5.74344 7.64398 6.23185 7.38827 6.68986 7.14867C7.0365 6.96704 7.45007 6.96704 7.79671 7.14867C7.98906 7.24931 8.19469 7.35685 8.38704 7.4575C9.02464 7.79137 9.7851 7.79137 10.4227 7.4575C10.8807 7.21789 11.3691 6.96219 11.3691 6.96219C11.6141 6.83396 11.7086 6.53125 11.5806 6.28628C11.4524 6.04157 11.1497 5.9468 10.9047 6.07503C10.9047 6.07503 10.4163 6.33073 9.95829 6.57034C9.61165 6.75196 9.19808 6.75196 8.85144 6.57034C8.65909 6.46969 8.45346 6.36215 8.26111 6.2615C7.62352 5.92764 6.86306 5.92764 6.22546 6.2615C5.76745 6.50111 5.27904 6.75681 5.27904 6.75681C5.03407 6.88505 4.93955 7.18775 5.06753 7.43247C5.19576 7.67744 5.49847 7.77221 5.74344 7.64398ZM5.74344 5.62417C5.74344 5.62417 6.23185 5.36847 6.68986 5.12886C7.0365 4.94724 7.45007 4.94724 7.79671 5.12886C7.98906 5.2295 8.19469 5.33705 8.38704 5.43769C9.02464 5.77156 9.7851 5.77156 10.4227 5.43769C10.8807 5.19808 11.3691 4.94238 11.3691 4.94238C11.6141 4.81415 11.7086 4.51145 11.5806 4.26673C11.4524 4.02176 11.1497 3.92699 10.9047 4.05522C10.9047 4.05522 10.4163 4.31092 9.95829 4.55053C9.61165 4.73215 9.19808 4.73215 8.85144 4.55053C8.65909 4.44988 8.45346 4.34234 8.26111 4.2417C7.62352 3.90783 6.86306 3.90783 6.22546 4.2417C5.76745 4.4813 5.27904 4.737 5.27904 4.737C5.03407 4.86524 4.93955 5.16794 5.06753 5.41266C5.19576 5.65763 5.49847 5.7524 5.74344 5.62417ZM20.2111 5.30716C20.3102 5.30716 20.405 5.26578 20.4722 5.19323C20.5396 5.12043 20.5736 5.02285 20.5662 4.92399C20.431 3.16116 21.0702 1.83233 21.9928 0.664692C22.1019 0.526496 22.0937 0.329292 21.9734 0.200548C21.8529 0.0720585 21.6567 0.0508567 21.5116 0.15048C19.8029 1.32579 18.7479 2.90035 18.3591 4.88261C18.3387 4.98709 18.366 5.09514 18.4337 5.17739C18.5014 5.25965 18.6021 5.30716 18.7086 5.30716H20.2111ZM17.404 5.30716C17.3499 5.10868 17.3409 4.89794 17.3815 4.69103C17.5202 3.98421 17.7333 3.32286 18.0204 2.70698C17.4684 1.70946 16.6778 0.857298 15.6501 0.15048C15.505 0.0508567 15.3086 0.0720585 15.1883 0.200548C15.068 0.329292 15.0598 0.526496 15.1689 0.664692C16.0918 1.83233 16.7309 3.16116 16.5958 4.92399C16.5884 5.02285 16.6224 5.12043 16.6898 5.19323C16.757 5.26578 16.8517 5.30716 16.9509 5.30716H17.404Z"
                />
            </svg>
        </span>
    );
};

export default MoutainIcon;
