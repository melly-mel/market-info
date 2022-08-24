import { useEffect, useReducer } from 'react';
import { initialProviderState, ProviderAction, providerReducer, ProviderState } from './reducer';
import { DataStoreService } from '../../services/index';
import { ProviderPractices } from '../../models';
import { loadItems } from '../base/actions';

export const useProviderReducer: (selectedProviderId: string) => [ProviderState, React.Dispatch<ProviderAction>] = (selectedProviderId) => {
    const [practiceState, dispatchPracticeAction] = useReducer(providerReducer, initialProviderState);
    useEffect(() => {
        async function fetchPractices() {
            // const insurMarkets = await DataStoreService.query(InsurancesMarkets);
            // const insurances = insurMarkets
            //     .filter((insuranceMarket) => insuranceMarket.markets.id === selectedMarketId)
            //     .map((insuranceMarket) => insuranceMarket.insurances);
            // loadItems(dispatchInsuranceAction, insurances);
            if (selectedProviderId){
                const providerPractices = await DataStoreService.getAll(ProviderPractices);
                console.log(providerPractices);
                // const practices = providerPractices
                //     .filter((providerPractice) => providerPractice.)
                // const practices = await DataStoreService.query(ProviderPractices, ProviderPractices => ProviderPractices.('eq', selectedMarketId));
                // loadItems(dispatchPracticeAction, practices);
            }
        }
        fetchPractices();
    }, [selectedProviderId]);
    return [practiceState, dispatchPracticeAction];
}