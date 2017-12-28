interface Merchant
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

interface Bid
{
    id:string;
    carTitle:string;
    amount:number;
    created:string;
}
