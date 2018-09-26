import React, { Component } from 'react';

import Row from '../Row';

class Battlefield extends Component {
  constructor(props) {
    super(props);
    this.state = {
      field: this.props.bf
    }
  }

  shouldComponentUpdate(nextProps,nextState){    
    return(this.state.field !== nextState.field);
  }

  render() {
    return(
      <div className='Battlefield'>
        {this.state.field.map((item, i) => {
          if (i===0) {
            return(
              <Row catchError={this.props.catchError} key={i} row={i} 
                token={this.props.token} col={item} vert='top'/>
            );  
          } else if (i=== this.state.field.length -1) {
            return(
              <Row catchError={this.props.catchError} key={i} row={i}
                token={this.props.token} col={item} vert='down'/>
            );
          } else {
            return(
              <Row catchError={this.props.catchError} key={i} row={i}
                token={this.props.token} col={item} />
            );
          }
        })}
      </div>
    )
  }
}

export default Battlefield;