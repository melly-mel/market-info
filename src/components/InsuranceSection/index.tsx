import { useEffect, useReducer, useState } from 'react';
import { DataStoreService } from '../../services/index';
import { InsurancePlans, Insurances, Markets } from '../../models';
import { Dropdown } from '../base/Dropdown';
import { Collection, Flex, View, Text } from '@aws-amplify/ui-react';
import { initialMarketState, marketReducer, intialInsuranceState, insuranceReducer } from './reducer';
import { loadInsurances, loadMarkets, setSelectedMarket } from './actions';

export const InsuranceSection = () => {
    const [marketState, dispatchMarketAction] = useReducer(marketReducer, initialMarketState);
    const [insuranceState, dispatchInsuranceAction] = useReducer(insuranceReducer, intialInsuranceState);
    const [plans, setPlans] = useState([]);
    useEffect(() => {
        async function fetchMarkets() {
            const markets = await DataStoreService.getAll(Markets);
            loadMarkets(dispatchMarketAction, markets);
        }
        fetchMarkets();
    }, []);
    useEffect(() => {
        async function fetchInsurances() {
            const insurances = await DataStoreService.get(Insurances, marketState.selectedId);
            console.log(insurances)
            loadInsurances(dispatchInsuranceAction, [insurances]);
        }
        fetchInsurances();
    }, [marketState.selectedId])
    useEffect(() => {
        async function fetchInsurancePlans() {
            const plans = await DataStoreService.getAll(InsurancePlans);
            setPlans(plans);
        }
        fetchInsurancePlans();
    }, [insuranceState])
    return (
        <Flex>
            <Dropdown
                label='Market'
                placeHolder='Select a market'
                selections={marketState.items}
                valueKey='id'
                displayKey='state'
                value={marketState.selectedId}
                onChange={(e) => setSelectedMarket(dispatchMarketAction, e.target.value)} />
            <Dropdown
                label='Insurance Provider'
                placeHolder='Select an insurance'
                selections={insuranceState.items}
                valueKey='id'
                displayKey='name'
                value={insuranceState.selectedId}
                onChange={(e) => setSelectedMarket(dispatchInsuranceAction, e.target.value)} />
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