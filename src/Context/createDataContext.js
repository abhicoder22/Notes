import React, {useReducer} from 'react';

export default (reducer, actions, initialState) => {
  const Context = React.createContext();

  const Provider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const BoundActons = {};
    for (let key in actions) {
      BoundActons[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{state, ...BoundActons}}>
        {children}
      </Context.Provider>
    );
  };
  return {Context, Provider};
};
