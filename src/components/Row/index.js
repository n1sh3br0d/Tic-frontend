import React, { Component } from 'react';

import Col from '../Col';

import './main.css';

class Row extends Component{
  render() {
    return(
      <React.Fragment>
        <div className='Row'>
          {this.props.col.map((item, i) => {
            if (i===0) {
              return(
                <Col row={this.props.row} vert={this.props.vert} hor='left' 
                  key={i} col={i} item={item} token={this.props.token}
                  catchError={this.props.catchError}/>
              );
            } else if (i===this.props.col.length-1) {
              return(
              <Col row={this.props.row} vert={this.props.vert} hor='right' 
                key={i} col={i} item={item} token={this.props.token}
                catchError={this.props.catchError}/>
              );
            } else {
              return(
              <Col row={this.props.row} vert={this.props.vert} 
                key={i} col={i} item={item} token={this.props.token}
                catchError={this.props.catchError}/>
              );
            }      
          })}
        </div>
      </React.Fragment>
    )
  }
}

export default Row;