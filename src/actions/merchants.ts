import axios from 'axios';

//merchant list

export const FETCH_MERCHANTS="FETCH_MERCHANTS";
export const FETCH_MERCHANTS_SUCCESS="FETCH_MERCHANTS_SUCCESS";
export const FETCH_MERCHANTS_FAILURE="FETCH_MERCHANTS_FAILURE";
export const RESET_MERCHANTS="RESET_MERCHANTS";

// //create new merchant
// export const CREATE_MERCHANT="CREATE_MERCHANT";
// export const CREATE_MERCHANT_SUCCESS="CREATE_MERCHANT_SUCCESS";
// export const CREATE_MERCHANT_FAILURE="CREATE_MERCHANT_FAILURE";
// export const RESET_NEW_MERCHANT="RESET_NEW_MERCHANT";

// //fetch merchant
// export const FETCH_MERCHANT="FETCH_MERCHANT";
// export const FETCH_MERCHANT_SUCCESS="FETCH_MERCHANT_SUCCESS";
// export const FETCH_MERCHANT_FAILURE="FETCH_MERCHANT_FAILURE";
// export const RESET_ACTIVE_MERCHANT="RESET_ACTIVE_MERCHANT";


// //Delete merchant
// export const DELETE_MERCHANT = 'DELETE_MERCHANT';
// export const DELETE_MERCHANT_SUCCESS = 'DELETE_MERCHANT_SUCCESS';
// export const DELETE_MERCHANT_FAILURE = 'DELETE_MERCHANT_FAILURE';
// export const RESET_DELETED_MERCAHANT = 'RESET_DELETED_MERCHANT';

const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:3000/api' : '/api';

export function fetchMerchants() {    
      const request = axios({    
        method: 'get',    
        url: `${ROOT_URL}/merchants`,    
        headers: []    
      });
      return {    
        type: FETCH_MERCHANTS,    
        payload: request    
      };    
    }
export function fetchMerchantsSuccess(merchants:Merchant) {        
          return {        
            type: FETCH_MERCHANTS_SUCCESS,        
            payload: merchants        
          };        
    }
 export function fetchMerchantsFailure(error:any) {        
        return {        
          type: FETCH_MERCHANTS_FAILURE,        
          payload: error        
        };        
  }
  export function resetMerchants() {        
    return {        
      type: RESET_MERCHANTS 
    };        
}