import React, { Component } from 'react';
import Battlefield from '../Battlefield';
import GameBtn from '../GameBtn';

import './main.css';

class Game extends Component{
  constructor(props) {
    super(props);
    this.getState = this.getState.bind(this)
    this.state = {
      token: this.props.token,
      game: false,
      interval: false
    }
    
  }

  getState() {
    fetch('/state', {
      headers: {
        authorization: this.state.token
      }
    }).then(response => {
      if (response.ok) {
        return response.json()
      } else {
        return response.json()
      }
    })
    .then(data => {
      if (data.status === 'ok') {
        this.setState({game: data})
      } else {
        sessionStorage.clear();
        this.props.setToken(false);
      }
    })
    .catch((error) =>{
      console.error(error);
    });
  }

  componentDidMount() {
    this.getState()
    let intervalId = setInterval(this.getState, 2000);
    this.setState({interval: intervalId});
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  shouldComponentUpdate(nextProps,nextState){    
    return(this.state.game !== nextState.game);
  }

  render() {
    let view;
    if(this.state.game.field) {
      view = <Battlefield catchError={this.props.catchError} 
        bf={this.state.game.field} token={this.props.token}/>
    }

    return(
      <div className='Game'>
        <div className='Players'>
          <div className='Owner'>
            <span >{this.state.game.owner}</span>
            <span className='Owner-symbol'>X</span>
          </div>
          <div className='Opponent'>
            <span className='Opponent-symbol'>{this.state.game.opponent !== 'undefined' ? 
              'O' : ''}</span>
            <span>{this.state.game.opponent !== 'undefined' ? 
              this.state.game.opponent : ''}</span>
          </div>
          <hr/>
        </div>
        {view}
        <div className='ButtonG'>
        <GameBtn setToken={this.props.setToken} catchError={this.props.catchError} 
          player={this.state.game.you} duration={this.state.game.gameDuration} token={this.state.token}/>
        </div>
      </div>
    )
  }
}

export default Game;
