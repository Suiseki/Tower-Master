import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Tower extends React.Component {
  render () {
    return (
      <div>tower {this.props.counter}</div>
    )
  } 
}

class Castle extends React.Component {
  render () {
    let towers = [];
    for (let i=0; i<6; i++) {
      towers.push(<Tower counter={i}/>)
    }
    
    return (
      <div>{towers}</div>
    )
  }
}

ReactDOM.render(<Castle/>, document.getElementById('root'))