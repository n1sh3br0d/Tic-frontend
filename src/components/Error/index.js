import React, { Component } from 'react';

class Error extends Component {
  render() {
    return(
      <React.Fragment>
        <div className='Error'>
          <span>{this.props.message}</span>
        </div>
      </React.Fragment>
    )
  }
}

export default Error;