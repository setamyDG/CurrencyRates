import React from 'react';
import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../utility';

const initialState = {
  currencies: ['USD', 'AUD', 'SGD', 'PHP', 'EUR', 'PLN', 'GBP'],
  base: 'EUR',
  amount: '',
  secondAmount: '',
  convertTo: 'PLN',
  currencyPLN: '',
  result: '',
  error: null,
  loading: false,
};

const handleFirstSelect = (state, action) => {
  return updateObject(state,{base: action.itemValue});
};

const handleSecondSelect = (state, action) => {
  return updateObject(state,{convertTo: action.itemValue});
};

const handleInput = (state, action) => {
  return updateObject(state,{amount: action.text, date: state.date});
};

const fetchDataSuccess = (state, action) => {
  return updateObject(state,{result: action.data.rates, date: action.data.date, currencyPLN: action.data.rates.PLN});
};

const fetchDataFail = (state, action) => {
  return updateObject(state, {loading: false, error: action.error});
};

const handleSecondInput = (state, action) => {
  return updateObject(state, {secondAmount: action.text});
};

const handleThirdSelect = (state, action) => {
  return updateObject(state,{secondBase: action.itemValue});
};

const exchangeCurrencies = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.HANDLE_FIRST_SELECT: return handleFirstSelect(state, action);
    case actionTypes.HANDLE_SECOND_SELECT: return handleSecondSelect(state, action);
    case actionTypes.HANDLE_INPUT: return handleInput(state, action);
    case actionTypes.FETCH_DATA_SUCCESS: return fetchDataSuccess(state, action);
    case actionTypes.FETCH_DATA_FAIL: return fetchDataFail(state, action);
    case actionTypes.HANDLE_SECOND_INPUT: return handleSecondInput(state, action);
    case actionTypes.HANDLE_THIRD_SELECT: return handleThirdSelect(state,action);
    default: return state;
  }
};

export default exchangeCurrencies;
