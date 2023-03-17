import * as actionTypes from './actionTypes';

export const change = (name) => {
  return {
    type: actionTypes.CHANGE,
    val: 'Yakshu',
  };
};
export const increment = () => {
  return {
    type: actionTypes.INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: actionTypes.DECREMENT,
  };
};

export const reset = () => {
  return {
    type: actionTypes.RESET,
  };
};
