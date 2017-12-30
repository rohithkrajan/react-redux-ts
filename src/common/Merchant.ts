export interface Merchant
{
    id:number;
    firstName:string;
    lastName:string;
    avatarUrl:string;
    email:string;
    phone:string;
    hasPremium:boolean;
    bids:Bid[];
}

export interface Bid
{
    id:string;
    carTitle:string;
    amount:number;
    created:string;
}
