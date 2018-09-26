import React, { Component } from 'react';

import ListItem from '../ListItem';
import NewGame from '../NewGame';

import './main.css'

class ListGames extends Component{
  constructor(props) {
    super(props);
    this.getAll = this.getAll.bind(this);
    this.state = {
      games: [],
      name: '',
      size: 3
    }
  }

  getAll() {
    fetch('http://localhost:3000/list/', {
      method: 'get',
      mode: 'no-cors'
    })
      .then(response => response.json())
      .then(data => this.setState({ games: data.games }))
      .catch((error) =>{
        console.error(error);
      });
  }

  componentDidMount() {
    this.getAll()
    let intervalId = setInterval(this.getAll, 2000);
    this.setState({interval: intervalId});
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  shouldComponentUpdate(nextProps,nextState){    
    return(this.state !== nextState);
  }

  render() {
    let games = this.state.games;

    return(
      <React.Fragment>
        <div className='Prepare-Game'>
          <input className="Name-input" placeholder = "Username"
          value={this.state.name} 
          onChange={(e) => this.setState({name: e.target.value})}/>
          <input className="Size-input" type='number'
          value={this.state.size} 
          onChange={(e) => this.setState({size: e.target.value})}/>
          <hr/>
        </div>
        <div className='Games-list'>
          {games ? 
            games.map(game => {
              return(
                <ListItem game={game} setToken={this.props.setToken} key={game.gameToken} />
              );
            }) : ''
          }
        </div>
        <NewGame catchError={this.props.catchError} name={this.state.name} size={this.state.size} setToken={this.props.setToken}/>
      </React.Fragment>
    )
  }
}

export default ListGames;