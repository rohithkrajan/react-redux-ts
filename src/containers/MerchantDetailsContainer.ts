
import { connect,Dispatch } from 'react-redux';
//import { fetchPosts, resetDeletedPost, deletePost, deletePostSuccess, deletePostFailure } from '../actions/posts';
import {fetchMerchant,fetchMerchantSuccess,fetchMerchantFailure,MerchantDetailAction} from '../actions/merchantdetails';
import {MerchantDetail} from '../components/MerchantDetails';
import {StoreState} from '../types/index';

export interface MerchantDetailsContainerProps  
{   
    id:string;    
}

function mapStateToProps(globalstate:StoreState,ownProps:any) {    
    return{activeMerchant:globalstate.activeMerchant,merchantId:ownProps.params.id};
  }

const mapDispatchToProps = (dispatch:Dispatch<MerchantDetailAction>) => {
    return {        
        fetchMerchant: (id:string) => {
          dispatch(fetchMerchant(id)).payload.then((response:any) => {
                !response.error ? dispatch(fetchMerchantSuccess(response.data)) : dispatch(fetchMerchantFailure(response.payload.data));
              }).catch((reason:any)=>{
                dispatch(fetchMerchantFailure(reason));
              });;
        }
      }
}


export default connect(mapStateToProps, mapDispatchToProps)(MerchantDetail);
