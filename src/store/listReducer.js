import * as actionTypes from './action/actionTypes';

const initialState = {
  data: [],
  results: [],
};
const removeList = (state, action) => {
  // const updatedArray = state.results.filter(
  //   (result) => result.key !== action.resultElId
  // );
  // return updateObject(state, { results: updatedArray });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE:
      console.log('...........123');
      return {
        ...state,
        // name:action.name
        name: action.val,
      };
    case actionTypes.INCREMENT:
      console.log('increment');
      return {
        ...state,
        counter: state.counter + 1,
      };
    case actionTypes.DECREMENT:
      console.log('decrement');
      return {
        ...state,
        counter: state.counter - 1,
      };
    case actionTypes.RESET:
      console.log('reset');
      return {
        ...state,
        counter: 0,
      };
    case actionTypes.FETCH_LISTS_START:
      return {
        ...state,
        // data: action.data,
        loading: true,
      };
    case actionTypes.FETCH_LISTS_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    case actionTypes.FETCH_LISTS_FAIL:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.ADD_LISTS_FAIL:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.ADD_LISTS_START:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.ADD_LISTS_SUCCESS:
      return {
        ...state,
        loading: false,
        // data: action.data.concat(result),
      };

    case actionTypes.ADD_LIST:
      const result = { ...action.data };
      return {
        ...state,
        loading: true,
        data: action.data.concat(result),
      };

    case actionTypes.DELETE_LIST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: state.data.filter((data, key) => key !== action.item),
      };
    case actionTypes.DELETE_FAIL:
      return {
        ...state,
        loading: false,
      };

    case actionTypes.EDIT_LIST:
      return {
        ...state,
        loading: false,
      };

    case actionTypes.EDIT_LIST_SUCCESS:
      // console.log('EDIT_LIST_SUCCESS11', action.data);
      // console.log('EDIT_LIST_SUCCESS', state.data);

      let res = [...state.data];
      // const upd_obj = res.findIndex((obj) => obj.id == action.data.id);
      // console.log('upd', upd_obj);
      // res[upd_obj] = action.data;

      const newArr = res.map((obj) => {
        console.log('obj', obj);
        if (obj.id === action.data.id) {
          return Object.assign(obj, action.data);
        }
        return obj;
      });

      return {
        ...state,
        loading: false,
        data: newArr,
      };

    case actionTypes.EDIT_LIST_FAIL:
      return {
        ...state,
        loading: false,
      };
  }

  return state;
};

export default reducer;
