import axios from 'axios';

export const fetchRandomGreeting = () => {
  return (dispatch) => {
    axios.get('/random_greeting').then((response) => {
      dispatch({ type: 'FETCH_GREETING', payload: response.data.greeting });
    });
  };
};
