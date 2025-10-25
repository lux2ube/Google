
import React from 'react';
import { CryptoIcon } from './icons/CryptoIcon';

export const Header: React.FC = () => {
    return (
        <header className="bg-base-200/50 backdrop-blur-sm sticky top-0 z-50">
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                         <CryptoIcon className="h-8 w-8 text-brand-primary" />
                         <span className="ml-3 text-2xl font-bold tracking-tight text-content-100">CryptoSwift</span>
                    </div>
                    <div className="flex items-center">
                        <button className="bg-brand-primary hover:bg-brand-secondary text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
                            Connect Wallet
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};
