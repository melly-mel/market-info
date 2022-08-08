import { Markets } from "../../models";

export enum InsuranceSectionActionType {
    LOAD, SET
}

export interface InsuranceSectionAction {
    type: InsuranceSectionActionType;
    markets?: Markets[];
    marketId?: string;
}

export interface InsuranceSectionState {
    markets: Markets[];
    selectedMarket: string;
}

export const initialState: InsuranceSectionState = { markets: [], selectedMarket: null };

export const reducer = (state: InsuranceSectionState, action: InsuranceSectionAction) => {
    switch (action.type) {
        case InsuranceSectionActionType.LOAD:
            return {
                ...state,
                markets: action.markets,
            }
        case InsuranceSectionActionType.SET:
            const selectedMarket = state.markets.find((market) => market.id === action.marketId)
            return {
                ...state,
                selectedMarket: selectedMarket.id,
            }
        default:
            throw new Error();
    }

}