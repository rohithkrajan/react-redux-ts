import * as React from 'react';
//import * as ReactDOM from 'react-dom';
import './App.css';
//import HeaderContainer from './containers/HeaderContainer';
//import { Button } from 'react-bootstrap';
//import HomePage from './components/Jumbotron'
//const logo = require('./logo.svg');
//export interface HelloProps { compiler: string; framework: string; }

class App extends React.Component {
  render() {
    return (
      <div>        
        {this.props.children}
      </div>
    );
  }
}

export default App;
