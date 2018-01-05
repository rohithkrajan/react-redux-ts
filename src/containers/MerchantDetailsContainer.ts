
import { connect,Dispatch } from 'react-redux';
//import { fetchPosts, resetDeletedPost, deletePost, deletePostSuccess, deletePostFailure } from '../actions/posts';
import {fetchMerchant,fetchMerchantSuccess,fetchMerchantFailure,MerchantDetailAction} from '../actions/merchantdetails';
import {MerchantDetail} from '../components/MerchantDetails';
import {StoreState} from '../types/index';


function mapStateToProps({activeMerchant}:StoreState) {
  return{activeMerchant};
}

const mapDispatchToProps = (dispatch:Dispatch<MerchantDetailAction>) => {
    return {        
        fetchMerchant: () => {
          dispatch(fetchMerchant()).payload.then((response:any) => {
                !response.error ? dispatch(fetchMerchantSuccess(response.data)) : dispatch(fetchMerchantFailure(response.payload.data));
              }).catch((reason:any)=>{
                dispatch(fetchMerchantFailure(reason));
              });;
        }
      }
}


export default connect(mapStateToProps, mapDispatchToProps)(MerchantDetail);
