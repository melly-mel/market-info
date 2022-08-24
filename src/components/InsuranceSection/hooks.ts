import { useEffect, useReducer, useState } from "react";
import { InsurancePlans, InsurancesMarkets, Markets } from "../../models";
import { DataStoreService } from "../../services";
import { loadItems } from "../base/actions";
import { marketReducer, initialMarketState, insuranceReducer, intialInsuranceState, MarketAction, InsuranceAction, MarketState, InsuranceState } from "./reducer";

export const useMarketReducer: () => [MarketState, React.Dispatch<MarketAction>] = () => {
    const [marketState, dispatchMarketAction] = useReducer(marketReducer, initialMarketState);
    useEffect(() => {
        async function fetchMarkets() {
            try {
                const markets = await DataStoreService.getAll(Markets);
                loadItems(dispatchMarketAction, markets);
            } catch (e) {
                console.error(e)
            }
        }
        fetchMarkets();
    }, []);
    return [marketState, dispatchMarketAction];
}

export const useInsuranceReducer: (selectedMarketId: string) => [InsuranceState, React.Dispatch<InsuranceAction>] = (selectedMarketId: string) => {
    const [insuranceState, dispatchInsuranceAction] = useReducer(insuranceReducer, intialInsuranceState);
    useEffect(() => {
        async function fetchInsurances() {
            if (selectedMarketId) {
                const insuranceMarkets = await DataStoreService.query(InsurancesMarkets);
                const insurances = insuranceMarkets
                    .filter((insuranceMarket) => insuranceMarket.markets.id === selectedMarketId)
                    .map((insuranceMarket) => insuranceMarket.insurances);
                loadItems(dispatchInsuranceAction, insurances);
            } else {
                loadItems(dispatchInsuranceAction, []);
            }
        }
        fetchInsurances();
    }, [selectedMarketId]);
    return [insuranceState, dispatchInsuranceAction];
}

export const usePlanState: (selectedInsuranceId: string) => [InsurancePlans[], React.Dispatch<React.SetStateAction<InsurancePlans[]>>] = (selectedInsuranceId: string) => {
    const [plans, setPlans] = useState<InsurancePlans[]>([]);
    useEffect(() => {
        async function fetchInsurancePlans() {
            if (selectedInsuranceId) {
                const plans = await DataStoreService.query(InsurancePlans, insurancePlan => insurancePlan.insurancesID('eq', selectedInsuranceId));
                setPlans(plans);
            } else {
                setPlans([]);
            }
        }
        fetchInsurancePlans();
    }, [selectedInsuranceId]);
    return [plans, setPlans];
}
