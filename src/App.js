import React, { Component } from 'react';
import Bs, { Col } from 'react-bootstrap';
import './styles/App.css';

import UserCard from './components/UserCard'
import Landing from './components/Landing'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <Landing></Landing>
      </div>
    );
  }
}

export default App;
