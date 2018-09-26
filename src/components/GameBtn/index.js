import React, { Component } from 'react';

import './main.css';

class GameBtn extends Component{
  constructor(props) {
    super(props);
    this.surrend = this.surrend.bind(this);
  }

  surrend() {
    if (this.props.player === 'owner' || this.props.player === 'opponent') {
      if (this.props.duration !== 'Not started') {
        fetch('/do_step', {
          method: 'post',
          headers:
            {'Content-Type': 'application/x-www-form-urlencoded',
             'Authorization': this.props.token},
          body: new URLSearchParams(`surrender=true`)
        }).then(response => {
          if (response.ok) {
            return response.json()
          } else {
            return response.json()
          }
        }).then(data => {
          if (data.status !== 'ok') {
            this.props.catchError(data.message);
          } else {
            this.props.setToken(false);
          }
        })
        .catch((error) =>{
          console.error(error);
        });
      } else {
        this.props.setToken(false);
      }
    } else {
      this.props.setToken(false);
    }
  }

  render() {
    let wrote;
      if (this.props.player === 'owner' || this.props.player === 'opponent') {
        wrote = 'SURRENDER';
      } else {
        wrote = 'BACK';
      }
    return(
      <React.Fragment>
        <div className='GameBtn' onClick={this.surrend}>
          <span>{wrote}</span>
        </div>
      </React.Fragment>
    )
  }
}

export default GameBtn;