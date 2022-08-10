import { useEffect, useReducer, useState } from 'react';
import { DataStoreService } from '../../services/index';
import { InsurancePlans, InsurancesMarkets, Markets } from '../../models';
import { Dropdown } from '../base/Dropdown';
import { Collection, Flex, View, Text } from '@aws-amplify/ui-react';
import { initialMarketState, marketReducer, intialInsuranceState, insuranceReducer } from './reducer';
import { loadInsurances, loadMarkets, setSelectedId } from './actions';

export const InsuranceSection = () => {
    const [marketState, dispatchMarketAction] = useReducer(marketReducer, initialMarketState);
    const [insuranceState, dispatchInsuranceAction] = useReducer(insuranceReducer, intialInsuranceState);
    const [plans, setPlans] = useState([]);
    const resetForm = () => {
        loadInsurances(dispatchInsuranceAction, []);
        setPlans([]);
    }
    useEffect(() => {
        async function fetchMarkets() {
            const markets = await DataStoreService.getAll(Markets);
            loadMarkets(dispatchMarketAction, markets);
        }
        fetchMarkets();
    }, []);
    useEffect(() => {
        async function fetchInsurances() {
            if (marketState.selectedId) {
                const insurMarkets = await DataStoreService.query(InsurancesMarkets);
                const insurances = insurMarkets
                    .filter((insurMarket) => insurMarket.markets.id === marketState.selectedId)
                    .map((insurMarket) => insurMarket.insurances);
                loadInsurances(dispatchInsuranceAction, insurances);
            } else {
                loadInsurances(dispatchInsuranceAction, []);
            }
        }
        fetchInsurances();
    }, [marketState.selectedId]);
    useEffect(() => {
        async function fetchInsurancePlans() {
            if (insuranceState.selectedId){
                const plans = await DataStoreService.query(InsurancePlans, insurancePlan => insurancePlan.insurancesID('eq', insuranceState.selectedId));
                setPlans(plans);
            } else {
                setPlans([]);
            }
        }
        fetchInsurancePlans();
    }, [insuranceState.selectedId]);
    return (
        <Flex>
            <Dropdown
                label='Market'
                placeHolder='Select a market'
                selections={marketState.items}
                valueKey='id'
                displayKey='state'
                value={marketState.selectedId}
                onChange={(e) => {
                    resetForm();
                    setSelectedId(dispatchMarketAction, e.target.value)} 
                } />
            <Dropdown
                label='Insurance Provider'
                placeHolder='Select an insurance'
                selections={insuranceState.items}
                valueKey='id'
                displayKey='name'
                value={insuranceState.selectedId}
                onChange={(e) => setSelectedId(dispatchInsuranceAction, e.target.value)} />
            <View>
                <Text>Plans Accepted</Text>
                <Collection
                    type="list"
                    items={plans}>
                    {(item, index) => (
                        <Flex key={index}>
                            <Text>{item.name}</Text>
                            <Text>{`(${item.type})`}</Text>
                            <Text>{item.code}</Text>
                        </Flex>
                    )}
                </Collection>
            </View>
        </Flex>
    );
}