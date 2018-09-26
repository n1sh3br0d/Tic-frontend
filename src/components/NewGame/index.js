import React, { Component } from 'react';

import './main.css';

class NewGame extends Component{
  constructor(props) {
    super(props);
    this.startGame = this.startGame.bind(this);
  }

  startGame() {
    fetch('/new', {
      method: 'post',
      mode: 'no-cors',
      headers: new Headers(
        {'Content-Type': 'application/x-www-form-urlencoded' }
     ),
      body: new URLSearchParams(`userName=${this.props.name}&size=${this.props.size}`)
    }).then(response => {
      if (response.ok) {
        return response.json()
      } else {
        return response.json()
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
      <div className='button-new' onClick={this.startGame}>
        <span className='button-text'>+</span>
      </div>
    )
  }
}

export default NewGame;