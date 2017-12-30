import { MerchantsAction } from '../actions/merchants';
import { StoreState } from '../types/index';
import {FETCH_MERCHANTS,FETCH_MERCHANTS_FAILURE,FETCH_MERCHANTS_SUCCESS,RESET_MERCHANTS} from '../constants/index';


export function merchantsReducer(state:StoreState,action:MerchantsAction):StoreState
{
    switch(action.type)
    {
        case FETCH_MERCHANTS:
            return {...state};
        case FETCH_MERCHANTS_SUCCESS:
            return {...state};
        case FETCH_MERCHANTS_FAILURE:
            return {...state};
        case RESET_MERCHANTS:
            return {...state};
    }
    return state;
}