import {fetchUserID} from '../utils/utils'

export default function Reducer(state, action) {
  const dispatch = (action )=> {
    console.log("Acionou dentro do reducer a própria dispatch")
    console.log({state,action})
    const coisa = Reducer(state,action)
    console.log(coisa)
  } 
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
    case 'GETUSERID': {
      console.log(`User name ${state.userName} submitted`);
      const {userName} = {...state }
      console.log(`Getting userID for userName ${userName}`)
      fetchUserID(userName, dispatch)
      return { ...state };
    }
    case 'RECEIVEDUSERID': {
      console.log(`Received userID ${payload} from API`)
      return { ...state , userID:payload}
    }
    case 'CHANGEUSERNAME': {
      return { ...state, userName: payload };
    }
    case 'GETFOLLOWERS': {
      console.log(`Getting followers for userID ${state.userID}`)
      return { ...state};
    }
    case 'ERRORFETCHUSERID': {
      console.log('O fetch do userID deu galho')
      console.log(`Eis o state ${state}`)
    }
    default:
      console.log(`It shouldn´t reach it here. The action was ${action.type}`);
      return state;
  }
}

function addOneTo(counter, wichButton) {
  const select = { 1: '2', 2: '3', 3: '1' };
  const newCounter = { ...counter };
  newCounter[select[wichButton]]++;
  return { ...newCounter };
}
