import { Dispatch } from "react";
import { Insurances } from "../../models";
import { ActionType } from "./reducer";
import { MarketAction, InsuranceAction } from "../InsuranceSection/reducer";
import { PracticeAction } from "../PracticeSection/reducer";

type Actions = MarketAction | InsuranceAction | PracticeAction;

export const loadItems = (dispatch: Dispatch<Actions>, insurances: Insurances[]) => {
    dispatch({
        type: ActionType.LOAD,
        items: insurances
    })
}

export const setSelectedId = (dispatch: React.Dispatch<Actions>, value: string) => {
    dispatch({
        type: ActionType.SET,
        id: value
    })
}
