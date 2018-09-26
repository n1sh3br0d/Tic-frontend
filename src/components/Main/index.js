import React, { Component } from 'react';

import ListGames from '../ListGames';
import Game from '../Game';

import './main.css';

class Main extends Component{
  constructor(props) {
    super(props);
    this.setToken = this.setToken.bind(this);
    this.state = {
      accessToken: sessionStorage.getItem('token'),
    }
  }

  setToken(token){
    this.setState({accessToken: token});
  }

  shouldComponentUpdate(nextProps,nextState){    
    return(this.state.accessToken !== nextState.accessToken);
  }

  render() {
    let view;

    if (this.state.accessToken) {
      view = <Game token={this.state.accessToken} catchError={this.props.catchError} setToken={this.setToken}/>
    } else {
      view = <ListGames setToken={this.setToken} catchError={this.props.catchError}/> 
    }
    return(
      <div className='Main'>
        {view}
      </div>
    )
  }
}

export default Main;