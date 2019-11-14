import * as actionTypes from '../actions/actionTypes';

export const userReducer = (state = [] , action) => {

    switch (action.type) {
      case actionTypes.GET_DATA:
        return action.userData;

      case actionTypes.FAILED_USER:
        return action.error;

      default:
        return state
    }
  }