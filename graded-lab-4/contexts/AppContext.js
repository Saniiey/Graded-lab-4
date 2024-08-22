import React, { createContext, useReducer } from 'react';

const initialState = {
  cart: [],
  formData: {},
  theme: { backgroundColor: '#fff', textColor: '#000' }
};

const AppContext = createContext();

const appReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_CART':
      return { ...state, cart: action.payload };
    case 'UPDATE_FORM':
      return { ...state, formData: { ...state.formData, ...action.payload } };
    case 'UPDATE_THEME':
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
