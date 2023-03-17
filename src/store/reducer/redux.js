const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  console.log('action', action);

  return state;
};

export default reducer;
