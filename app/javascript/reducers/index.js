const initialState = {
    greeting: '',
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_GREETING':
        return { ...state, greeting: action.payload };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  