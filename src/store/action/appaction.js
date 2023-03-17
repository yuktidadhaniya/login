import * as actionTypes from './actionTypes';
import axios from '../../axios-details';

export const fetchListStart = () => {
  return {
    type: actionTypes.FETCH_LISTS_START,
  };
};

export const fetchListsSuccess = (data) => {
  return {
    type: actionTypes.FETCH_LISTS_SUCCESS,
    data: data,
  };
};

export const fetchListsFail = (error) => {
  return {
    type: actionTypes.FETCH_LISTS_FAIL,
    error: error,
  };
};

export const fetchLists = () => {
  return (dispatch) => {
    dispatch(fetchListStart());
    axios
      .get('/data.json')
      .then((res) => {
        const fetchedLists = [];
        for (let key in res.data) {
          fetchedLists.push({
            ...res.data[key],
            id: key,
          });
        }

        dispatch(fetchListsSuccess(fetchedLists));
      })
      .catch((err) => {
        dispatch(fetchListsFail(err));
      });
  };
};

export const addListsStart = () => {
  return {
    type: actionTypes.ADD_LISTS_START,
  };
};

export const addListsSuccess = (data) => {
  return {
    type: actionTypes.ADD_LISTS_SUCCESS,
    data: data,
  };
};

export const addListsFail = (error) => {
  return {
    type: actionTypes.ADD_LISTS_FAIL,
    error: error,
  };
};

export const addList = (data) => {
  return (dispatch) => {
    dispatch(addListsStart());
    axios
      .post('/data.json', data)
      .then((response) => {
        dispatch(addListsSuccess(data));
      })
      .catch((error) => {
        dispatch(addListsFail(error));
      });
  };
};

export const removeListstart = () => {
  return {
    type: actionTypes.DELETE_LIST,
  };
};

export const removeListFail = () => {
  return {
    type: actionTypes.DELETE_FAIL,
  };
};

export const removeListSuccess = (key) => {
  return {
    type: actionTypes.DELETE_SUCCESS,
    item: key,
  };
};
export const removeList = (data) => {
  return (dispatch) => {
    dispatch(removeListstart());
    axios
      .delete('data.json')
      .then((response) => {
        console.log('response', response);
        dispatch(removeListSuccess(data));
      })
      .catch((error) => {
        console.log('error', error);
        dispatch(removeListFail(error));
      });
  };
};

export const editListstart = () => {
  return {
    type: actionTypes.EDIT_LIST,
  };
};

export const editListSuccess = (data) => {
  return {
    type: actionTypes.EDIT_LIST_SUCCESS,
    data: data,
  };
};

export const editListFail = () => {
  return {
    type: actionTypes.EDIT_LIST_FAIL,
  };
};
export const editItem = (data) => {
  return (dispatch) => {
    dispatch(editListstart());
    dispatch(editListSuccess(data));
    dispatch(editListFail());
  };
};
