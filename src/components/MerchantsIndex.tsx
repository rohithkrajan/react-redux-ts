import * as React from 'react';
import Header from './Header';
import MerchantListContainer from '../containers/MerchantContainer';
//import HeaderContainer from '../containers/HeaderContainer'

export default class MerchantIndex extends React.Component{
    render(){
        return (
            <div>
                <Header type="merchants_index"/>
                <MerchantListContainer/>
            </div>
        );
    }
}