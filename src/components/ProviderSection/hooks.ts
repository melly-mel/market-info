import { useEffect, useReducer } from 'react';
import { initialProviderState, ProviderAction, providerReducer, ProviderState } from './reducer';
import { DataStoreService } from '../../services/index';
import { ProvidersPractices } from '../../models';
import { loadItems } from '../base/actions';

export const useProviderReducer: (selectedProviderId: string) => [ProviderState, React.Dispatch<ProviderAction>] = (selectedProviderId) => {
    const [practiceState, dispatchPracticeAction] = useReducer(providerReducer, initialProviderState);
    useEffect(() => {
        async function fetchPractices() {
            if (selectedProviderId){
                const providerPractices = await DataStoreService.getAll(ProvidersPractices);
                const practices = providerPractices
                    .filter((providerPractice) => providerPractice.providers.id === selectedProviderId)
                    .map((providerPractice) => providerPractice.providers)
                loadItems(dispatchPracticeAction, practices);
            }
        }
        fetchPractices();
    }, [selectedProviderId]);
    return [practiceState, dispatchPracticeAction];
}