import React from 'react';

import MyContext from '../components/MyContext';
import Reducer from '../components/Reducer';

export default function test() {
  const [state, dispatch] = React.useReducer(Reducer, {
    clickedButton: 'None',
    counter: { 1: 0, 2: 0, 3: 0 },
  });
  React.useEffect(() => {
    console.log(`state changed and the counter ${state.counter}`);
  }, [state.counter]);

  React.useEffect(() => {
    console.log(`state changed and the button ${state.clickedButton}`);
  }, [state.clickedButton]);
  const myValues = [];
  for (let wcounter in state.counter) {
    myValues.push({ wcounter, quantos: state.counter[wcounter] });
  }

  function myClikc(qualBotão) {
    console.log('Inside myClikc');
    dispatch({ type: 'CLICKED', payload: qualBotão });
  }

  return (
    <div>
      <MyContext.Provider value={{ state, dispatch }}>
        <h2>The last button clicked was {state.clickedButton}</h2>
        {myValues.map(w => (
          <h3 key={w.wcounter}>
            The counter for {w.wcounter} is {w.quantos}
          </h3>
        ))}
        <button type='button' onClick={() => myClikc(1)}>
          1
        </button>
        <button type='button' onClick={() => myClikc(2)}>
          2
        </button>
        <button type='button' onClick={() => myClikc(3)}>
          3
        </button>
      </MyContext.Provider>
    </div>
  );
}
