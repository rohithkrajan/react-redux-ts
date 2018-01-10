import * as React from 'react';
//import { Link } from 'react-router';
import * as merchantTypes from '../types/index';
import { Merchant } from '../common/Merchant';
//import {Table} from 'react-bootstrap';
import { BidsList } from './BidsList';

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
          <div>         
          <div className="row">
          <div className="col-lg-12">
            <div className="col-xs-12 col-sm-4">
              <figure>
                <img className="img-circle img-responsive" alt="" src={merchant.avatarUrl?merchant.avatarUrl:"http://placehold.it/300x300"}/>
              </figure>
              
              <div className="row">
                <div className="col-xs-12 social-btns">
                  
                    <div className="col-xs-3 col-md-1 col-lg-1 social-btn-holder">
                      <a className="btn btn-social btn-block btn-google" href="#">
                        <i className="fa fa-google"></i> </a>
                    </div>
                  
                    <div className="col-xs-3 col-md-1 col-lg-1 social-btn-holder">
                      <a className="btn btn-social btn-block btn-facebook" href="#">
                        <i className="fa fa-facebook"></i> </a>
                    </div>
                  
                    <div className="col-xs-3 col-md-1 col-lg-1 social-btn-holder">
                      <a className="btn btn-social btn-block btn-twitter" href="#">
                        <i className="fa fa-twitter"></i> </a>
                    </div>
                  
                    <div className="col-xs-3 col-md-1 col-lg-1 social-btn-holder">
                      <a className="btn btn-social btn-block btn-linkedin" href="#">
                        <i className="fa fa-linkedin"></i> </a>
                    </div>
                  
                    <div className="col-xs-3 col-md-1 col-lg-1 social-btn-holder">
                      <a className="btn btn-social btn-block btn-github" href="#">
                        <i className="fa fa-github"></i> </a>
                    </div>
                  
                    <div className="col-xs-3 col-md-1 col-lg-1 social-btn-holder">
                      <a className="btn btn-social btn-block btn-stackoverflow" href="#">
                        <i className="fa fa-stack-overflow"></i> </a>
                    </div>
                  
                </div>
              </div>
              
            </div>

            <div className="col-xs-12 col-sm-8">
              <ul className="list-group">
                <li className="list-group-item">{merchant.firstName} {merchant.lastName}</li>                
                <li className="list-group-item"><i className="fa fa-phone"></i> {merchant.phone} </li>
                <li className="list-group-item"><i className="fa fa-envelope"></i> {merchant.email}</li>
              </ul>
            </div>            
          </div>
          <BidsList bids={merchant.bids}/>
          </div>
         </div>
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
  