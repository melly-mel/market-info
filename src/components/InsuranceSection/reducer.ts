import { Insurances, Markets } from "../../models";

export enum ActionType {
    LOAD, SET
}

export interface Action<T extends { id?: string }> {
    type: ActionType;
    items?: T[];
    id?: string;
}

export interface State<T extends { id?: string }> {
    items: T[];
    selectedId: string;
};

const reducer = <T extends { id?: string }>(state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
        case ActionType.LOAD:
            return {
                ...state,
                items: action.items,
            }
        case ActionType.SET:
            const selectedMarket = state.items.find((item) => item.id === action.id)
            return {
                ...state,
                selectedId: selectedMarket.id,
            }
        default:
            throw new Error();
    }
}

export type MarketAction = Action<Markets>;
export type MarketState = State<Markets>;

export const initialMarketState: MarketState = {
    items: [],
    selectedId: null
};

export const marketReducer = (state: MarketState, action: MarketAction) => reducer<Markets>(state, action);

export type InsuranceState = State<Insurances>;
export type InsuranceAction = Action<Insurances>;

export const intialInsuranceState: InsuranceState = {
    items: [],
    selectedId: null
};

export const insuranceReducer = (state: InsuranceState, action: InsuranceAction) => reducer<Insurances>(state, action);