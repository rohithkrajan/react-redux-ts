import * as React from 'react';
//import * as ReactDOM from 'react-dom';
import './App.css';
import Header from './components/Header';
//import HeaderContainer from './containers/HeaderContainer';
//import { Button } from 'react-bootstrap';
//import HomePage from './components/Jumbotron'
//const logo = require('./logo.svg');
//export interface HelloProps { compiler: string; framework: string; }

class App extends React.Component {
  render() {
    return (
      <div>   
        <Header type="merchants_index"/>     
        {this.props.children}
      </div>
    );
  }
}

export default App;
