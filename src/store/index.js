import reducer from './reducer';
import enchancer from './enchancer';
import { createStore } from 'redux';

export const createServerState = () => createStore(reducer, enchancer);
export const createState = (initialState) => createStore(reducer, initialState, enchancer);