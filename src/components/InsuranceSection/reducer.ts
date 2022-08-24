import { Insurances, Markets } from "../../models";
import { State, Action, reducer } from "../base/reducer";

export type MarketState = State<Markets>;
export type MarketAction = Action<Markets>;

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