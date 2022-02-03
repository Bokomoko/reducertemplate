export default function Reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case 'CLICKED': {
      console.log("Inside Reducer's CLICKED");
      console.log(`Clicked the ${payload} button`);
      const { counter } = state;
      const newCounter = addOneTo({ ...counter }, payload);

      return { ...state, counter: { ...newCounter } };
    }
    case 'MODIFYBUTTON': {
      console.log(`Modify button ${payload}`);
      return { ...state, clickedButton: payload };
    }
    case 'SUBMITUSER': {
      console.log(`User name ${state.userName} submitted`);
      console.log({payload})
      return { ...state, userID : payload.userID };
    }
    case 'CHANGEUSERID': {
      console.log(`User name ${state.userName} has userID = ${payload.userID}`);
      return { ...state, userID : payload.userID };
    }
    case 'FETCHFOLLOWERS': {
      return { ...state, listOfFollowers: payload.listOfFollowers};
    }
    default:
      console.log('It shouldn´t reach it here');
      return state;
  }
}

function addOneTo(counter, wichButton) {
  const select = { 1: '2', 2: '3', 3: '1' };
  const newCounter = { ...counter };
  newCounter[select[wichButton]]++;
  return { ...newCounter };
}
