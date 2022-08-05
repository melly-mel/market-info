import { useEffect, useState } from 'react';
import { DataStoreService } from '../../services/index';
import { InsurancePlans, Insurances, Markets } from '../../models';
import { Dropdown } from '../base/Dropdown';
import { Collection, Flex, View, Text } from '@aws-amplify/ui-react';

export const InsuranceSection = () => {
    const [markets, setMarkets] = useState([]);
    const [insurances, setInsurances] = useState([]);
    const [plans, setPlans] = useState([]);
    useEffect(() => {
        async function fetchMarkets() {
            const markets = await DataStoreService.getAll(Markets);
            setMarkets(markets);
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
            <Dropdown label='Market' selections={markets} valueKey='state' displayKey='state' />
            <Dropdown label='Insurance Provider' selections={insurances} valueKey='name' displayKey='name' />
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