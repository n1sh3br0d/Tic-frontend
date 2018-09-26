import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Error from './components/Error';

import './main.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.catchError = this.catchError.bind(this);
    this.cancelError = this.cancelError.bind(this);
    this.state = {
      error: false,
      message: ''
    }
  }

  catchError(message) {
    this.setState({error: true, message});
  }

  cancelError() {
    this.setState({error: false});
  }

  render() {
    let view;
      if (this.state.error) {
        view = <Error key='Error' message={this.state.message}/>
        setTimeout(this.cancelError, 3000);
      }
    return (
      <React.Fragment>
        <Header/>
        {view}
        <Main catchError={this.catchError}/>
      </React.Fragment>
    )
  }
}

export default App;
