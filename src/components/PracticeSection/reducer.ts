import { Practices } from "../../models";
import { Action, reducer, State } from "../InsuranceSection/reducer";

export type PracticeState = State<Practices>;
export type PracticeAction = Action<Practices>;
export const initialPracticeState: PracticeState = {
    items: [],
    selectedId: null
};
export const practiceReducer = (state: PracticeState, action: PracticeAction) => reducer<Practices>(state, action);