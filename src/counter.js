import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './store/action/index';

const Count = (props) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCounter((counter) => counter + 2);
    }, 1000);
  }, []);
  return (
    <div>
      <h2 align="center">{props.name}</h2>
      <h2 align="center">counter:{counter}</h2>
      <h2 align="center">{props.counter}</h2>
      <button type="button" className="btn" onClick={props.onAddName}>
        Change
      </button>
      <button type="button" className="btn" onClick={props.onIncrementCounter}>
        Increment
      </button>
      <button type="button" className="btn" onClick={props.onDecrementCounter}>
        Decrement
      </button>
      <button type="button" className="btn" onClick={props.onresetCounter}>
        Reset
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    name: state.name,
    counter: state.counter,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAddName: () => dispatch(actionCreators.change()),
    onIncrementCounter: () => dispatch(actionCreators.increment()),
    onDecrementCounter: () => dispatch(actionCreators.decrement()),
    onresetCounter: () => dispatch(actionCreators.reset()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Count);
