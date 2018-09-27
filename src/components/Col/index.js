import React, { Component } from 'react';

import './main.css';

class Col extends Component{
  constructor(props) {
    super(props);
    this.doStep = this.doStep.bind(this);
  }

  doStep() {
    fetch('/do_step', {
      method: 'post',
      headers:
        {'Content-Type': 'application/x-www-form-urlencoded',
         'Authorization': this.props.token},
      body: new URLSearchParams(`row=${this.props.row + 1}&col=${this.props.col + 1}`)
    }).then(response => {
      if (response.ok) {
        return response.json()
      } else {
        return response.json()
      }
    }).then(data => {
      if (data.status !== 'ok') {
        this.props.catchError(data.message);
      }
    })
    .catch((error) =>{
      console.error(error);
    });
  }

  render() {
    let id;
    let player;

    if (this.props.vert === 'top') {
      id='top' 
    } if (this.props.hor === 'left') {
      id='left' 
    } 
    if (this.props.hor === 'right') {
      id='right' 
    } 
    if (this.props.vert === 'top' && this.props.hor === 'left') {
      id='top-left'
    }
    if (this.props.vert === 'top' && this.props.hor === 'right') {
      id='top-right'
    } 
    if (this.props.vert === 'down') {
      id='down' 
    } 
    if (this.props.vert === 'down' && this.props.hor === 'left') {
      id='down-left'
    } 
    if (this.props.vert === 'down' && this.props.hor === 'right') {
      id='down-right'
    }

    if (this.props.item === 'X') {
      player = 'owner'
    } else if (this.props.item === '0') {
      player = 'opponent'
    }

    return(
      <React.Fragment>
        <div className='Col' id={id} onClick={this.doStep}>
          <span id={player}>{this.props.item === '?' ? '' :
            this.props.item}</span>
        </div>
      </React.Fragment>
    )
  }
}

export default Col;