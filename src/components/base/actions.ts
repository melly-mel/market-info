import { Dispatch } from "react";
import { Insurances } from "../../models";
import { ActionType, InsuranceAction } from "../InsuranceSection/reducer";
import { MarketAction } from "../InsuranceSection/reducer";

export const loadItems = (dispatch: Dispatch<MarketAction | InsuranceAction>, insurances: Insurances[]) => {
    dispatch({
        type: ActionType.LOAD,
        items: insurances
    })
}

export const setSelectedId = (dispatch: React.Dispatch<MarketAction | InsuranceAction>, value: string) => {
    dispatch({
        type: ActionType.SET,
        id: value
    })
}
