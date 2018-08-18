import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="col">
          <div><span>A: </span><span>{this.props.a}</span></div>
          <button onClick={this.props.updateA}>Update A</button>
        </div>
        <div className="col">
          <div><span>b: </span><span>{this.props.b}</span></div>
          <button onClick={this.props.updateB}>Update B</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    a: store.rA.a,
    b: store.rB.b
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateA: () => dispatch({type: 'UPDATE_A'}),
    updateB: () => dispatch({type: 'UPDATE_B'})
}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
