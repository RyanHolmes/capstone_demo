import React, { Component } from 'react';
import Bs, { Col } from 'react-bootstrap';

import '../styles/Landing.css';
import UserCard from './UserCard';

class Landing extends Component {
  render() {
    return (
      <div>
        <h1 className='page-title'> Title </h1>
        <div className="landing-container">
            <UserCard img="../images/ryan.jpg" name="Vanessa Deng"></UserCard>
            <UserCard img="../images/ryan.jpg" name="Hannes Filler"></UserCard>
            <UserCard img="../images/ryan.jpg" name="Ryan Holmes"></UserCard>
            <UserCard img="../images/ryan.jpg" name="Ian Wood"></UserCard>
            <UserCard img="../images/ryan.jpg" name="Andrea Zagar"></UserCard>
        </div>
      </div>
    );
  }
}

export default Landing;
