import React from 'react';

import MyContext from '../components/MyContext';
import Reducer from '../components/Reducer';

export default function test() {
  const [state, dispatch] = React.useReducer(Reducer, {
    clickedButton: 'None',
  });
  return (
    <div>
      <MyContext.Provider value={{ state, dispatch }}>
        <button
          type='button'
          onClick={() => dispatch({ type: 'CLICKED', payload: '1' })}
        >
          1
        </button>
        <button
          type='button'
          onClick={() => dispatch({ type: 'CLICKED', payload: '2' })}
        >
          2
        </button>
        <button
          type='button'
          onClick={() => dispatch({ type: 'CLICKED', payload: '3' })}
        >
          3
        </button>
      </MyContext.Provider>
    </div>
  );
}
