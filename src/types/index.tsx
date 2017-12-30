import {Merchant} from '../common/Merchant';

export interface MerchantsList
{
    merchants:Merchant[];
    error:any;
    loading:boolean;
}
export interface MerchantData
{
    merchant:Merchant;
    error:any;
    loading:boolean;
}
export interface StoreState
{
    merchantsList:MerchantsList;
    newMerchant:MerchantData;
    activeMerchant:MerchantData;
    deletedMerchant:MerchantData;
}