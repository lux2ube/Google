import React from 'react';

const IconWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="w-6 h-6 flex items-center justify-center">{children}</div>
);

export const BtcIcon: React.FC = () => (
    <IconWrapper>
        <svg fill="#F7931A" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.3 7.825c.225-.45 0-.75-.525-.9l-2.4-.6c-.375-.075-.675-.225-.825-.525l-1.2-2.475c-.15-.3-.375-.45-.675-.45-.3 0-.525.15-.675.45l-1.2 2.475c-.15.3-.45.45-.825.525l-2.4.6c-.45.15-.675.45-.525.9l1.2 2.7c.15.3.15.675 0 .975l-1.2 2.7c-.15.45 0 .75.525.9l2.4.6c.375.075.675.225.825.525l1.2 2.475c.15.3.375.45.675.45s.525-.15.675-.45l1.2-2.475c.15-.3.45-.45.825-.525l2.4-.6c.45-.15.675-.45.525-.9l-1.2-2.7c-.15-.3-.15-.675 0-.975l1.2-2.7zm-4.5 5.85c-.9.225-2.25.15-3-.15v-1.8c.75.3 2.1.375 3 .15v1.8zm0-2.55c-1.05.225-2.55.15-3.375-.15v-1.875c.825.3 2.325.375 3.375.15v1.875z" />
        </svg>
    </IconWrapper>
);

export const EthIcon: React.FC = () => (
    <IconWrapper>
        <svg fill="#627EEA" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 1.75l-6.13 9.5 6.13 3.5 6.13-3.5L12 1.75zM5.87 12.25l6.13 3.5 6.13-3.5-6.13 9.5z" />
        </svg>
    </IconWrapper>
);

export const SolIcon: React.FC = () => (
    <IconWrapper>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="sol-gradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#9945FF" />
                    <stop offset="100%" stopColor="#14F195" />
                </linearGradient>
            </defs>
            <path fill="url(#sol-gradient)" d="M20.58 4.88c.04-.13.01-.27-.08-.37L18.12 2.13c-.11-.12-.29-.14-.42-.04L4.72 6.83a.5.5 0 00-.23.63l2.38 7.37c.11.33.46.52.8.44l13-4.14a.5.5 0 00.41-.75zM3.42 19.12c-.04.13-.01.27.08.37l2.38 2.38c.11.12.29.14.42.04l12.98-4.74a.5.5 0 00.23-.63l-2.38-7.37c-.11-.33-.46-.52-.8-.44l-13 4.14a.5.5 0 00-.41.75z"/>
        </svg>
    </IconWrapper>
);

export const UsdtIcon: React.FC = () => (
    <IconWrapper>
        <svg fill="#26A17B" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
             <path d="M12 2c-5.514 0-10 4.486-10 10s4.486 10 10 10 10-4.486 10-10-4.486-10-10-10zm2.235 13.169h-1.613v2.831h-1.428v-2.831h-4.76v-1.286h4.76v-4.759h1.428v4.759h1.613v1.286z" />
        </svg>
    </IconWrapper>
);

export const XrpIcon: React.FC = () => (
    <IconWrapper>
        <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" color="#23292F">
            <path d="M10.875 3.375L6.375 7.875l-1.5-1.5L9.375 1.875l4.5 4.5 1.5-1.5L10.875 3.375zm2.25 10.125l4.5-4.5 1.5 1.5-4.5 4.5-4.5-4.5-1.5 1.5 4.5 4.5z" />
        </svg>
    </IconWrapper>
);

export const BnbIcon: React.FC = () => (
    <IconWrapper>
        <svg fill="#F0B90B" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="m12 14.116-2.121 2.122L12 18.36l2.121-2.122zM12 5.636 9.879 7.757 12 9.878l2.121-2.121zM18.36 12l-2.12-2.121L14.116 12l2.121 2.121zM9.878 12l-2.12-2.121L5.636 12l2.121 2.121zM21.182 9.878l-3.535-3.535L15.525 8.46l3.535 3.535-3.535 3.535 2.122 2.122 3.535-3.536a3 3 0 0 0 0-4.242zM2.818 9.878a3 3 0 0 0 0 4.242l3.535 3.536 2.122-2.122-3.535-3.535 3.535-3.535L6.353 6.343 2.818 9.878z" />
        </svg>
    </IconWrapper>
);