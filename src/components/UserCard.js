import React, { Component } from 'react';
import '../styles/UserCard.css';

class UserCard extends Component {
  render() {
    return (
      <div className="card user-card">
        {/* <img src={ require(this.props.img) } role="presentation" alt="ryan"/> */}
        <hr className="horizontal-line"/>
        <div> {this.props.name} </div>
      </div>
    );
  }
}

export default UserCard;
