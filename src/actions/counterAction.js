import * as actionTypes from './actionTypes';

export const incCount = () => {
    return {
        type: actionTypes.INCREMENT_COUNT,
    };
  };

  export const decCount = () => {
    return {
        type: actionTypes.DECREMENT_COUNT,
    };
};