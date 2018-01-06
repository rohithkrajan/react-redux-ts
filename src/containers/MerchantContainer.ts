
import { connect,Dispatch } from 'react-redux';
//import { fetchPosts, resetDeletedPost, deletePost, deletePostSuccess, deletePostFailure } from '../actions/posts';
import {fetchMerchants,fetchMerchantsSuccess,fetchMerchantsFailure, FetchMerchants} from '../actions/merchants';
import {MerchantsList} from '../components/MerchantsList';
import {StoreState} from '../types/index';


function mapStateToProps(globalstate:StoreState) {
  return{merchantsList:globalstate.merchantsList};
}

const mapDispatchToProps = (dispatch:Dispatch<FetchMerchants>) => {
    return {        
        fetchPosts: () => {
          dispatch(fetchMerchants()).payload.then((response:any) => {
                !response.error ? dispatch(fetchMerchantsSuccess(response.data)) : dispatch(fetchMerchantsFailure(response.payload.data));
              }).catch((reason:any)=>{
                dispatch(fetchMerchantsFailure(reason));
              });;
        }
      }
}


export default connect(mapStateToProps, mapDispatchToProps)(MerchantsList);
