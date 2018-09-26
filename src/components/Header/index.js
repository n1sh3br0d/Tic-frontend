import React, { Component } from 'react';

import './main.css'


class Header extends Component{

  render(){
    return(
      <React.Fragment>
        <div className='App-header'>
          <h1 className='Header-tittle'>Tic-Tac-Toe</h1>
        </div>
      </React.Fragment>
    )
  }
}

export default Header;