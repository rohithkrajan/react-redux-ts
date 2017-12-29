//import * as React from 'react';
import { connect } from 'react-redux';
//import { fetchPosts, resetDeletedPost, deletePost, deletePostSuccess, deletePostFailure } from '../actions/posts';
//import { logoutUser } from '../actions/users';
import HomePage from '../components/Jumbotron';



function mapStateToProps(state:any) {
  
}

const mapDispatchToProps = (dispatch:any, ownProps:any) => {
  return {
  	
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
