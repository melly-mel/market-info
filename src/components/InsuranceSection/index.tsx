import { useEffect, useReducer, useState } from 'react';
import { DataStoreService } from '../../services/index';
import { InsurancePlans, Insurances, Markets } from '../../models';
import { Dropdown } from '../base/Dropdown';
import { Collection, Flex, View, Text } from '@aws-amplify/ui-react';
import { initialState, reducer } from './reducer';
import { loadMarkets, setSelectedMarket } from './actions';

export const InsuranceSection = () => {
    const [marketState, dispatchMarketAction] = useReducer(reducer, initialState);
    const [insurances, setInsurances] = useState([]);
    const [plans, setPlans] = useState([]);
    useEffect(() => {
        async function fetchMarkets() {
            const markets = await DataStoreService.getAll(Markets);
            loadMarkets(dispatchMarketAction, markets);
        }
        async function fetchInsurances() {
            const insurances = await DataStoreService.getAll(Insurances);
            setInsurances(insurances);
        }
        async function fetchInsurancePlans() {
            const plans = await DataStoreService.getAll(InsurancePlans);
            setPlans(plans);
        }
        fetchMarkets();
        fetchInsurances();
        fetchInsurancePlans();
    }, []);
    return (
        <Flex>
            <Dropdown
                label='Market'
                placeHolder='Select a market'
                selections={marketState.markets} 
                valueKey='id' 
                displayKey='state'
                value={marketState.selectedMarket}
                onChange={(e) => setSelectedMarket(dispatchMarketAction, e.target.value)}/>
            <Dropdown 
                label='Insurance Provider' 
                placeHolder='Select an insurance'
                selections={insurances}
                valueKey='id' 
                displayKey='name'/>
            <View>
                <Text>Plans Accepted</Text>
                <Collection
                    type="list"
                    items={plans}>
                    {(item, index) => (
                        <Text key={index}>{`${item.name} (${item.type}) ${item.code}`}</Text>
                    )}
                </Collection>
            </View>
        </Flex>
    );
}