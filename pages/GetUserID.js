import React from 'react';
import MyContext from '../components/MyContext';
import Reducer from '../components/Reducer';

export default function GetUserID() {
  const [state, dispatch] = React.useReducer(Reducer, {});

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      <input
        type='text'
        placeholder='Enter your name'
        onInput={e => {
          dispatch({ type: 'CHANGEUSER', payload: e.target.value });
        }}
      />
      <button onClick={e => dispatch({ type: 'SUBMITUSER' })}>
        Get userID
      </button>
      <button onClick={e => dispatch({ type: 'FETCHFOLLOWERS' })}>
        Get followers
      </button>
    </MyContext.Provider>
  );
}
