
import { API_BASE_URL } from '../constants';
import type { PriceData } from '../types';

export const fetchCryptoPrices = async (coinIds: string[]): Promise<PriceData> => {
    if (coinIds.length === 0) {
        return {};
    }
    
    const ids = coinIds.join(',');
    const url = `${API_BASE_URL}/simple/price?ids=${ids}&vs_currencies=usd`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Failed to fetch crypto prices: ${response.statusText}`);
    }

    const data: PriceData = await response.json();
    return data;
};
