import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchUser = () => dispatch => {
    return axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {dispatch(getUser(response.data));})
      .catch(err => {dispatch(failUser(err.response.data.error));
    });
  };

export const getUser = (userData) => {
    return {
        type: actionTypes.GET_USER_DATA,
        userData
    };
  };

  export const failUser = (error) => {
    return {
        type: actionTypes.FAILED_USER,
        error
    };
};