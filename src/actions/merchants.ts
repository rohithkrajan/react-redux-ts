import axios, { AxiosPromise } from 'axios';
import * as constants from '../constants'

const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:3000/api' : '/api';

//merchant list

// export const FETCH_MERCHANTS="FETCH_MERCHANTS";
// export const FETCH_MERCHANTS_SUCCESS="FETCH_MERCHANTS_SUCCESS";
// export const FETCH_MERCHANTS_FAILURE="FETCH_MERCHANTS_FAILURE";
// export const RESET_MERCHANTS="RESET_MERCHANTS";

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

export interface FetchMerchants {
  type: constants.FETCH_MERCHANTS,
  payload: AxiosPromise<any>
}

export interface FetchMerchantsSuccess {
  type: constants.FETCH_MERCHANTS_SUCCESS,
  payload: Merchant[]
}


export interface FetchMerchantsFailure {
  type: constants.FETCH_MERCHANTS_FAILURE,
  payload: any
}

export interface ResetMerchants {
  type: constants.RESET_MERCHANTS
}

export type MerchantsAction=FetchMerchants|FetchMerchantsSuccess|FetchMerchantsFailure|ResetMerchants;

export function fetchMerchants(): FetchMerchants {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/merchants`,
    headers: []
  });
  return {
    type: constants.FETCH_MERCHANTS,
    payload: request
  };
}

export function fetchMerchantsSuccess(merchants: Merchant[]): FetchMerchantsSuccess {
  return {
    type: constants.FETCH_MERCHANTS_SUCCESS,
    payload: merchants
  };
}

export function fetchMerchantsFailure(error: any): FetchMerchantsFailure {
  return {
    type: constants.FETCH_MERCHANTS_FAILURE,
    payload: error
  };
}


export function resetMerchants(): ResetMerchants {
  return {
    type: constants.RESET_MERCHANTS
  };
}