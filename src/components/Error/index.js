import React, { Component } from 'react';

import './main.css';

class Error extends Component {
  render() {
    return(
      <React.Fragment>
        <div className='Error'>
          <span>{this.props.message}&#10004;</span>
        </div>
      </React.Fragment>
    )
  }
}

export default Error;