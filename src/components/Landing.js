import React, { Component } from 'react';
import Bs, { Col } from 'react-bootstrap';

import '../styles/Landing.css';
import UserCard from './UserCard';

class Landing extends Component {
  render() {
    return (
      <div className="landing-background">
        <h1 className='page-title'> BlueShift </h1>
        <div className="landing-container">
          <h3 className="landing-description">This site is a demo to showcase the recommendation engine we have created for Universe.com. It uses natural language processing to classify events and machine learning to do hybrid filtering. </h3>
          <UserCard img="../images/ryan.jpg" name="Vanessa Deng"></UserCard>
          <UserCard img="../images/ryan.jpg" name="Hannes Filler"></UserCard>
          <UserCard img="../images/ryan.jpg" name="Ryan Holmes"></UserCard>
          <UserCard img="../images/ryan.jpg" name="Ian Wood"></UserCard>
          <UserCard img="../images/ryan.jpg" name="Andrea Zagar"></UserCard>
          <br/>
          <div className="button-pink">Begin Demo</div>
        </div>
      </div>
    );
  }
}

export default Landing;
