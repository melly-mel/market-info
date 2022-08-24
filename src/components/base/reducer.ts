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

export const reducer = <T extends { id?: string }>(state: State<T>, action: Action<T>): State<T> => {
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
                selectedId: selectedMarket?.id,
            }
        default:
            throw new Error();
    }
}