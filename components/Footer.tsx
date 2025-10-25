
import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-base-200/50 mt-8">
            <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8 text-center text-content-200">
                <p>&copy; {new Date().getFullYear()} CryptoSwift Exchange. All Rights Reserved.</p>
                <p className="text-sm mt-1">Disclaimer: This is a simulation and not a real financial service.</p>
            </div>
        </footer>
    );
};
