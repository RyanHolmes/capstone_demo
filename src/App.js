import React, { Component } from 'react';
import './styles/App.css';
import UserCard from './components/UserCard'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render() {
    return (
      <UserCard img="../images/ryan.jpg" name="Ryan Holmes"></UserCard>
    );
  }
}

export default App;
