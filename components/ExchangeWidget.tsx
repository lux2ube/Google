import React, { useState, useEffect, useMemo } from 'react';
import type { Coin, PriceData } from '../types';
import { ArrowDownIcon } from './icons/ArrowDownIcon';
import { SwapIcon } from './icons/SwapIcon';

interface ExchangeWidgetProps {
    coins: Coin[];
    prices: PriceData;
    isLoading: boolean;
    error: string | null;
}

const CurrencyInput: React.FC<{
    label: string;
    amount: string;
    onAmountChange: (value: string) => void;
    selectedCoin: Coin | null;
    onCoinSelect?: (coin: Coin) => void;
    coinOptions?: Coin[];
    isInputDisabled?: boolean;
    isOutput?: boolean;
    prices: PriceData;
}> = ({ label, amount, onAmountChange, selectedCoin, onCoinSelect, coinOptions, isInputDisabled, isOutput, prices }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <div className="bg-base-100 p-4 rounded-xl">
            <label className="text-sm text-content-200 block mb-2">{label}</label>
            <div className="flex items-center justify-between">
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => onAmountChange(e.target.value)}
                    placeholder="0.0"
                    disabled={isInputDisabled}
                    className="bg-transparent text-3xl font-medium text-content-100 w-full focus:outline-none"
                    aria-label={`${label} amount`}
                />
                <div className="relative">
                    {onCoinSelect && coinOptions ? (
                        <button 
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex items-center space-x-2 bg-base-300 hover:bg-opacity-80 p-2 rounded-full transition-colors"
                            aria-haspopup="true"
                            aria-expanded={isDropdownOpen}
                        >
                            {selectedCoin?.logo}
                            <span className="font-semibold">{selectedCoin?.symbol}</span>
                            <ArrowDownIcon className={`w-5 h-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                    ) : (
                        <div className="flex items-center space-x-2 bg-base-300 p-2 rounded-full">
                           <div className="w-6 h-6 flex items-center justify-center font-bold text-brand-primary">$</div>
                           <span className="font-semibold">USD</span>
                        </div>
                    )}
                     {isDropdownOpen && onCoinSelect && coinOptions && (
                        <div className="absolute right-0 mt-2 w-48 bg-base-200 rounded-lg shadow-lg z-20 py-1" role="menu">
                            {coinOptions.map(coin => (
                                <div key={coin.id} onClick={() => { onCoinSelect(coin); setIsDropdownOpen(false); }} className="flex items-center space-x-3 px-4 py-2 hover:bg-base-300 cursor-pointer" role="menuitem">
                                    {coin.logo}
                                    <span>{coin.name}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
             {isOutput && <p className="text-sm text-content-200 mt-2">Price: 1 {selectedCoin?.symbol} ≈ ${prices[selectedCoin?.id ?? '']?.usd?.toLocaleString() || 'N/A'}</p>}
        </div>
    );
};

export const ExchangeWidget: React.FC<ExchangeWidgetProps> = ({ coins, prices, isLoading, error }) => {
    const [fromAmount, setFromAmount] = useState('100');
    const [toAmount, setToAmount] = useState('');
    const [selectedCoin, setSelectedCoin] = useState<Coin | undefined>(coins[0]);

    useEffect(() => {
        if (!selectedCoin || !prices[selectedCoin.id]) return;
        
        const rate = prices[selectedCoin.id].usd;
        const fromValue = parseFloat(fromAmount);

        if (!isNaN(fromValue) && rate > 0) {
            const result = fromValue / rate;
            // Format to a reasonable number of decimal places
            setToAmount(result.toFixed(6));
        } else {
            setToAmount('');
        }
    }, [fromAmount, selectedCoin, prices]);

    const handleAmountChange = (value: string) => {
        if (/^\d*\.?\d*$/.test(value)) {
             setFromAmount(value);
        }
    };
    
    const handleCoinSelect = (coin: Coin) => {
        setSelectedCoin(coin);
    };

    return (
        <div className="relative bg-base-200 p-6 rounded-2xl shadow-2xl max-w-md mx-auto border border-base-300">
            <div className="space-y-4">
               <CurrencyInput 
                 label="You Pay"
                 amount={fromAmount}
                 onAmountChange={handleAmountChange}
                 selectedCoin={null}
                 prices={prices}
               />
               <div className="flex justify-center -my-6 z-10">
                    <button className="bg-base-300 p-2 rounded-full border-4 border-base-200 hover:rotate-180 transition-transform duration-300" aria-label="Swap currencies">
                        <SwapIcon className="w-6 h-6 text-brand-primary" />
                    </button>
               </div>
               <CurrencyInput 
                 label="You Get"
                 amount={toAmount}
                 onAmountChange={() => {}}
                 selectedCoin={selectedCoin}
                 onCoinSelect={handleCoinSelect}
                 coinOptions={coins}
                 isInputDisabled
                 isOutput
                 prices={prices}
               />
            </div>
            {error && <p className="text-red-400 text-center mt-4" role="alert">{error}</p>}
            <button className="w-full mt-6 bg-brand-primary hover:bg-brand-secondary text-white font-bold py-3 px-4 rounded-xl text-lg transition-all duration-300 disabled:bg-base-300 disabled:cursor-not-allowed" disabled={isLoading || !fromAmount || parseFloat(fromAmount) <= 0}>
                {isLoading ? 'Loading Prices...' : 'Exchange'}
            </button>
        </div>
    );
};