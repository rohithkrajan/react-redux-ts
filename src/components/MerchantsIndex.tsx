import * as React from 'react';
import MerchantListContainer from '../containers/MerchantContainer';
//import HeaderContainer from '../containers/HeaderContainer'

export default class MerchantIndex extends React.Component{
    render(){
        return (
            <div>                
                <MerchantListContainer/>
            </div>
        );
    }
}