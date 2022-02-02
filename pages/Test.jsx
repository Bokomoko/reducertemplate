import React from 'react';

import MyContext from '../components/MyContext';
import Reducer from '../components/Reducer';
import MyButton from '../components/MyButton'

export default function Test() {
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

  
  return (
    <div>
      <MyContext.Provider value={{ state, dispatch }}>
        <h2>The last button clicked was {state.clickedButton}</h2>
        {myValues.map(w => (
          <h3 key={w.wcounter}>
            The counter for {w.wcounter} is {w.quantos}
          </h3>
        ))}
        <MyButton qualBotão={1} />
        <MyButton qualBotão={2} />
        <MyButton qualBotão={3} />
        
      </MyContext.Provider>
    </div>
  );
}
