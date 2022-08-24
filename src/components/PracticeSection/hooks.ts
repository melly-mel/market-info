import { useReducer, useEffect } from "react";
import { DataStoreService } from '../../services/index';
import { Practices } from '../../models';
import { initialPracticeState, PracticeAction, practiceReducer, PracticeState } from "./reducer";
import { loadItems } from "../base/actions";

export const usePracticeReducer: (selectedMarketId: string) => [PracticeState, React.Dispatch<PracticeAction>] = (selectedMarketId) => {
    const [practiceState, dispatchPracticeAction] = useReducer(practiceReducer, initialPracticeState);
    useEffect(() => {
        async function fetchPractices() {
            if (selectedMarketId){
                const practices = await DataStoreService.query(Practices, practices => practices.practicesMarketId('eq', selectedMarketId));
                loadItems(dispatchPracticeAction, practices);
            }
        }
        fetchPractices();
    }, [selectedMarketId]);
    return [practiceState, dispatchPracticeAction];
}