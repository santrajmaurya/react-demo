import * as actionTypes from '../actions/actionTypes';

export const counterReducer = (state = {count : 0 } , action) => {

    switch (action.type) {
      case actionTypes.INCREMENT_COUNT:
        return {
            ...state,
            count : state.count + 1
        }

      case actionTypes.DECREMENT_COUNT:
        return {
            ...state,
            count : state.count - 1
        }

      default:
        return state
    }
  }