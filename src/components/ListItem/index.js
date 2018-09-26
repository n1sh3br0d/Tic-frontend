import React, { Component } from 'react';

import './main.css'

class ListItem extends Component{
  constructor(props) {
    super(props);
    this.join = this.join.bind(this);
  }

  join() {
    fetch('/join', {
      method: 'post',
      mode: 'no-cors',
      headers: new Headers(
        {'Content-Type': 'application/x-www-form-urlencoded' }
     ),
      body: new URLSearchParams(`userName=${this.props.name}&gameToken=${this.props.game.gameToken}`)
    }).then(response => {
      if (response.ok) {
        return response.json();
      } else {
        return response.json();
      }
    })
    .then(data => {
      if (data.status === 'ok') {
        sessionStorage.setItem('token', data.accessToken);
        this.props.setToken(data.accessToken);
      } else {
        this.props.catchError(data.message);
      }
    })
    .catch((error) =>{
      console.error(error);
    });
  }

  render() {
    return(
      <React.Fragment>
        <div className='Game-item' onClick={this.join}>
          <div className='Owner'>
            <span>{this.props.game.owner}</span>  
          </div>
          <hr/>
          <div className='Opponent'>
            <span>{this.props.game.opponent}</span>
          </div>
          <div className='Duration'>
            <span>{this.props.game.gameDuration}</span>
          </div>
        </div>
      </React.Fragment>
      )
  }
}

export default ListItem;