import * as React from 'react';
import { Link } from 'react-router';
import * as merchantTypes from '../types/index';
import { Merchant } from '../common/Merchant';

export interface MerchantsListProps  
{
    merchantsList:merchantTypes.MerchantsList;
    fetchPosts:()=>any;
}

export class MerchantsList extends React.Component<MerchantsListProps,object> {
    componentWillMount() {
      this.props.fetchPosts();
    }   
  
    renderMerchants(merchants:Merchant[]) {
      return merchants.map((merchant) => {        
        return (
          <li className="list-group-item" key={merchant.id}>
            <Link style={{color:'black'}} to={"posts/" + merchant.id}>
              <h3 className="list-group-item-heading">{merchant.firstName}</h3>
            </Link>              
          </li>
        );
      });
    }
  
    render() {
      const { merchants, loading, error } = this.props.merchantsList;
  
      if(loading) {
        return <div className="container"><h1>Posts</h1><h3>Loading...</h3></div>      
      } else if(error) {
        return <div className="alert alert-danger">Error: {error.message}</div>
      }
  
      return (
        <div className="container">
          <h1>Merchants</h1>
          <ul className="list-group">
            {this.renderMerchants(merchants)}
          </ul>
        </div>
      );
    }
  }
  
  
  //export default MerchantsList;
  