import { Markets } from "../../models";
import { InsuranceSectionAction, InsuranceSectionActionType } from "./reducer";

export const loadMarkets = (dispatch: React.Dispatch<InsuranceSectionAction>, markets: Markets[]) => {
    dispatch({
        type: InsuranceSectionActionType.LOAD,
        markets: markets,
    });
}

export const setSelectedMarket = (dispatch: React.Dispatch<InsuranceSectionAction>, value: string) => {
    dispatch({
        type: InsuranceSectionActionType.SET,
        marketId: value
    })
}