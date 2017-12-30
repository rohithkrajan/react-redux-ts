import { MerchantsAction } from '../actions/merchants';
import { StoreState } from '../types/index';
import {FETCH_MERCHANTS,FETCH_MERCHANTS_FAILURE,FETCH_MERCHANTS_SUCCESS,RESET_MERCHANTS} from '../constants/index';


export function merchantsReducer(state:StoreState,action:MerchantsAction):StoreState
{
    let error:any;
    switch(action.type)
    {
        case FETCH_MERCHANTS:
            return {...state,merchantsList:{merchants:[],error:null,loading:true}};
        case FETCH_MERCHANTS_SUCCESS:
            return {...state,merchantsList:{merchants:action.payload,error:null,loading:false}};
        case FETCH_MERCHANTS_FAILURE:
        error=action.payload||{message:action.payload.message};
            return {...state,merchantsList:{merchants:[],error:error,loading:false}};
        case RESET_MERCHANTS:
            return {...state,merchantsList:{merchants:[],error:null,loading:false}};
    }
    return state;
}