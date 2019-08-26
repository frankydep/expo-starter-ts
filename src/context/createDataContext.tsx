import React, { createContext, useReducer } from 'react';

export const createDataContext = (reducer, actions, defaultState) => {
  // create the context
  const Context = createContext(defaultState);

  // create the provider
  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultState);

    const boundActions = {};

    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
