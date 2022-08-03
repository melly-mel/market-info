import { View, SelectField } from '@aws-amplify/ui-react';
import { useEffect, useState } from 'react';
import { DataStoreService } from '../services/index';
import { Markets } from '../models';

export const MarketSelectionField = () => {
    const [markets, setMarkets] = useState([]);
    useEffect(() => {
        async function fetchMarkets() {
            const markets = await DataStoreService.get(Markets);
            console.log(markets)
            setMarkets(markets);
        }
        fetchMarkets();
    }, []);
    return (
        <View>
            <SelectField>
                {markets.map((market, index) =>
                    <option key={index} value={market.state}>{market.state}</option>
                )}
            </SelectField>
        </View>
    )
}