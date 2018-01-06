import * as React from 'react';
import { Link } from 'react-router';
import * as merchantTypes from '../types/index';
import { Merchant } from '../common/Merchant';
//import {Table} from 'react-bootstrap';

export interface MerchantDetailsProps  
{
    activeMerchant:merchantTypes.MerchantData;
    merchantId:string;
    fetchMerchant:(id:string)=>any;
}

export class MerchantDetail extends React.Component<MerchantDetailsProps,object> {
    componentDidMount() {
      this.props.fetchMerchant(this.props.merchantId);
    }   
  
    renderMerchant(merchant:Merchant|null) {     
        if(merchant!=null)        
        {
        return (
          <li className="list-group-item" key={merchant.id}>
            <Link style={{color:'black'}} to={"posts/" + merchant.id}>
              <h3 className="list-group-item-heading">{merchant.firstName}</h3>
            </Link>              
          </li>
        ); 
        }  
        return;   
    }
  
    render() {
      const { merchant, loading, error } = this.props.activeMerchant;
  
      if(loading) {
        return <div className="container"><h1>Posts</h1><h3>Loading...</h3></div>      
      } else if(error) {
        return <div className="alert alert-danger">Error: {error.message}</div>
      }
  
      return (
        <div className="container">        
          <h1>Merchant Detail</h1>
          <ul className="list-group">
            {this.renderMerchant(merchant)}
          </ul>
        </div>
      );
    }
  }
  
  
//export default MerchantsList;
  