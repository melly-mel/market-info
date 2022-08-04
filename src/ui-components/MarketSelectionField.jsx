import { View, SelectField } from '@aws-amplify/ui-react';
import { useEffect, useState } from 'react';
import { DataStoreService } from '../services';
import { Markets } from './models';

export const MarketSelectionField = () => {
    const [markets, setMarkets] = useState([]);
    useEffect(() => {
        const markets = DataStoreService.get(Markets);
        setMarkets(markets);
    }, []);
    return (
        <View>
            <SelectField>
                {markets.map((market) =>
                    <option value={market.name}>market.name</option>
                )}
            </SelectField>
        </View>
    )
}