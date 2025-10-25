
import React from 'react';
import type { Coin, PriceData } from '../types';

interface CryptoTickerProps {
    coins: Coin[];
    prices: PriceData;
}

const TickerItem: React.FC<{ coin: Coin; price: number }> = ({ coin, price }) => (
    <div className="flex items-center space-x-4 flex-shrink-0 mx-6">
        <div className="flex-shrink-0">
            {coin.logo}
        </div>
        <div>
            <p className="font-semibold text-content-100">{coin.symbol}/USD</p>
            <p className="text-lg font-mono tracking-tighter text-content-100">${price.toLocaleString()}</p>
        </div>
    </div>
);

export const CryptoTicker: React.FC<CryptoTickerProps> = ({ coins, prices }) => {
    // Duplicate the list to create a seamless loop
    const tickerItems = [...coins, ...coins];

    return (
        <div className="relative w-full overflow-hidden bg-base-200/50 py-4 rounded-xl border border-base-300">
            <div className="absolute inset-0 z-10" style={{
                background: 'linear-gradient(to right, #0F172A, transparent 20%, transparent 80%, #0F172A)'
            }}></div>
            <div className="flex animate-marquee whitespace-nowrap">
                {tickerItems.map((coin, index) => {
                    const priceData = prices[coin.id];
                    if (!priceData) return null;
                    return <TickerItem key={`${coin.id}-${index}`} coin={coin} price={priceData.usd} />;
                })}
            </div>
        </div>
    );
};
