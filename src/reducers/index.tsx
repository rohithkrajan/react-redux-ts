import { MerchantsAction } from '../actions/merchants';
import { StoreState } from '../types/index';
import {FETCH_MERCHANTS,FETCH_MERCHANTS_FAILURE,FETCH_MERCHANTS_SUCCESS,RESET_MERCHANTS,
    FETCH_MERCHANT,RESET_ACTIVE_MERCHANT,FETCH_MERCHANT_FAILURE,FETCH_MERCHANT_SUCCESS} from '../constants/index';
import { MerchantDetailAction } from '../actions/merchantdetails';


const  INITIAL_STATE:StoreState = { merchantsList: {merchants: [], error:null, loading: false},  

							newMerchant:{merchant:null, error: null, loading: false}, 

							activeMerchant:{merchant:null, error:null, loading: false}, 

							deletedMerchant: {merchant: null, error:null, loading: false},

						};



export function merchantsReducer(state:StoreState=INITIAL_STATE,action:MerchantsAction|MerchantDetailAction):StoreState
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
        case FETCH_MERCHANT:
            return {...state,activeMerchant:{merchant:null,error:null,loading:true}};
        case FETCH_MERCHANT_SUCCESS:
            return {...state,activeMerchant:{merchant:action.payload,error:null,loading:false}};
        case FETCH_MERCHANT_FAILURE:
        error=action.payload||{message:action.payload.message};
            return {...state,activeMerchant:{merchant:null,error:error,loading:false}};
        case RESET_ACTIVE_MERCHANT:
            return {...state,activeMerchant:{merchant:null,error:null,loading:false}};
    }
    return state;
}

export default merchantsReducer;