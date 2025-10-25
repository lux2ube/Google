
import React from 'react';
import type { Coin } from './types';
import { BtcIcon, EthIcon, SolIcon, UsdtIcon, XrpIcon, BnbIcon } from './components/icons/CryptoIcons';

export const API_BASE_URL = 'https://api.coingecko.com/api/v3';

export const SUPPORTED_COINS: Coin[] = [
    { id: 'bitcoin', symbol: 'BTC', name: 'Bitcoin', logo: <BtcIcon /> },
    { id: 'ethereum', symbol: 'ETH', name: 'Ethereum', logo: <EthIcon /> },
    { id: 'solana', symbol: 'SOL', name: 'Solana', logo: <SolIcon /> },
    { id: 'tether', symbol: 'USDT', name: 'Tether', logo: <UsdtIcon /> },
    { id: 'ripple', symbol: 'XRP', name: 'XRP', logo: <XrpIcon /> },
    { id: 'binancecoin', symbol: 'BNB', name: 'Binance Coin', logo: <BnbIcon /> },
];
