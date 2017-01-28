import React, { Component } from 'react';
import Bs, { Col } from 'react-bootstrap';

import '../styles/CreateUser.css';
import UserCard from './UserCard';

class CreateUser extends Component {
  render() {
    return (
      <div className="create-user-background">
        <h1 className='page-title'> Create Users </h1>
        <div className="create-user-container">
          poop
          <br/>
          <div className="button-pink"> Continue </div>
        </div>
      </div>
    );
  }
}

export default CreateUser;
