import {createContext} from 'react';
const initialState = {
  factoriesList: [],
  productsList: [],
  factoriesProduction: {},
};
export const GlobalContext = createContext(initialState);
