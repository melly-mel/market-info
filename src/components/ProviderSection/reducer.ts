import { Providers } from '../../models';
import { Action, reducer, State } from '../base/reducer';

export type ProviderState = State<Providers>;
export type ProviderAction = Action<Providers>;
export const initialProviderState: ProviderState = {
    items: [],
    selectedId: null
};
export const providerReducer = (state: ProviderState, action: ProviderAction) => reducer<Providers>(state, action);