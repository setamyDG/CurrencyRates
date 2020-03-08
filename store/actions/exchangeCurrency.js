import * as actionTypes from './actionTypes';

export const handleFirstSelect = itemValue => {
  return {
    type: actionTypes.HANDLE_FIRST_SELECT,
    itemValue: itemValue,
  };
};

export const handleSecondSelect = itemValue => {
  return {
    type: actionTypes.HANDLE_SECOND_SELECT,
    itemValue: itemValue,
  };
};

export const handleInput = text => {
  return {
    type: actionTypes.HANDLE_INPUT,
    text: text,
  };
};

export const handleSecondInput = text => {
  return {
    type: actionTypes.HANDLE_SECOND_INPUT,
    text: text,
  };
};

export const fetchDataSuccess = data => {
  return {
    type: actionTypes.FETCH_DATA_SUCCESS,
    data: data,
  };
};

export const fetchDataFail = error => {
  return {
    type: actionTypes.FETCH_DATA_FAIL,
    error: error,
  };
};

export const handleThirdSelect = itemValue => {
  return {
    type: actionTypes.HANDLE_THIRD_SELECT,
    itemValue: itemValue,
  };
};

export const fetchData = (baseCurrency = 'EUR') => {
  return async dispatch => {
    try {
      await fetch(`https://api.exchangeratesapi.io/latest?base=${baseCurrency}`)
        .then(res => res.json())
        .then(
          data => {
            dispatch(fetchDataSuccess(data), console.log(data));
            dispatch(handleFirstSelect(baseCurrency));
            dispatch(handleThirdSelect(baseCurrency));
          },
          e => dispatch(fetchDataFail(e)),
          3000,
        );
    } catch (e) {
      console.log(e);
    }
  };
};
