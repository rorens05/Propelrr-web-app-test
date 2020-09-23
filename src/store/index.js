import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/index';
import Axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { BASE_URL } from '../utils/contants';

const client = Axios.create({
	baseURL: BASE_URL,
	responseType: 'json'
});

const store = createStore(reducer, applyMiddleware(logger, thunk, axiosMiddleware(client)));

export default store;
