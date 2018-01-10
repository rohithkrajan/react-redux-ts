import * as React from 'react';
import { Bid } from '../common/Merchant';
//import {Table} from 'react-bootstrap';


export interface BidsListProps  
{
    bids:Bid[];
    
}

export class BidsList extends React.Component<BidsListProps> {    
  
    renderBids(bids:Bid[]) {
      return bids.map((bid) => {        
        return (
          <li className="list-group-item" key={bid.id}>            
              <h5 className="list-group-item-heading">{bid.carTitle}</h5>                         
          </li>
        );
      });
    }
  
    render() {
      const { bids } = this.props;
  
      return (
        <div className="container">        
          <h1>Bids</h1>
          <ul className="list-group">
            {this.renderBids(bids)}
          </ul>
        </div>
      );
    }
  }
  
  
//export default MerchantsList;
  