
export interface Coin {
    id: string;
    symbol: string;
    name: string;
    logo: React.ReactNode;
}

export interface PriceData {
    [coinId: string]: {
        usd: number;
    };
}
