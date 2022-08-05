import { useEffect, useState } from 'react';
import { DataStoreService } from '../services/index';
import { Markets } from '../models';
import { Dropdown } from './base/Dropdown';

export const MarketSelectionField = () => {
    const [markets, setMarkets] = useState([]);
    useEffect(() => {
        async function fetchMarkets() {
            const markets = await DataStoreService.getAll(Markets);
            setMarkets(markets);
        }
        fetchMarkets();
    }, []);
    return <Dropdown label='Market' selections={markets} valueKey='state' displayKey='state' />;
}