import { Insurances, Markets } from "../../models";
import { ActionType, InsuranceAction } from "./reducer";
import { MarketAction } from "./reducer";

export const loadMarkets = (dispatch: React.Dispatch<MarketAction>, markets: Markets[]) => {
    dispatch({
        type: ActionType.LOAD,
        items: markets,
    });
}

export const setSelectedId = (dispatch: React.Dispatch<MarketAction>, value: string) => {
    dispatch({
        type: ActionType.SET,
        id: value
    })
}

export const loadInsurances = (dispatch: React.Dispatch<InsuranceAction>, insurances: Insurances[]) => {
    dispatch({
        type: ActionType.LOAD,
        items: insurances
    })
}
