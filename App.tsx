
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ExchangeWidget } from './components/ExchangeWidget';
import { CryptoTicker } from './components/CryptoTicker';
import type { Coin, PriceData } from './types';
import { fetchCryptoPrices } from './services/cryptoService';
import { SUPPORTED_COINS } from './constants';

const App: React.FC = () => {
    const [prices, setPrices] = useState<PriceData>({});
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const loadPrices = async () => {
        try {
            setError(null);
            const coinIds = SUPPORTED_COINS.map(coin => coin.id);
            const fetchedPrices = await fetchCryptoPrices(coinIds);
            setPrices(fetchedPrices);
        } catch (err) {
            setError('Failed to fetch cryptocurrency prices. Please try again later.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        loadPrices();
        const interval = setInterval(loadPrices, 30000); // Refresh prices every 30 seconds
        return () => clearInterval(interval);
    }, []);

    const tickerCoins: Coin[] = SUPPORTED_COINS.filter(coin => prices[coin.id]);

    return (
        <div className="flex flex-col min-h-screen bg-base-100 text-content-100 font-sans">
            <Header />
            <main className="flex-grow flex flex-col items-center justify-center p-4">
                <div className="w-full max-w-7xl mx-auto space-y-8">
                    {tickerCoins.length > 0 && <CryptoTicker coins={tickerCoins} prices={prices} />}
                     <ExchangeWidget coins={SUPPORTED_COINS} prices={prices} isLoading={isLoading} error={error} />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default App;
