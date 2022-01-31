import axios from 'axios';
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
    case 'CHANGEUSER': {
      return { ...state, userName: payload };
    }
    case 'SUBMITUSER': {
      console.log(`User name ${state.userName} submitted`);
      const { userName } = state;
      const { userID } = fetchUserID(userName);
      console.log(`UserID is ${userID}`);
      return { ...state, userID };
    }
    case 'MODIFYBUTTON': {
      console.log(`Modify button ${payload}`);
      return { ...state, clickedButton: payload };
    }
    case 'FETCHFOLLOWERS': {
      if (!state.userName) {
        console.log('No user name');
        break;
      }
      console.log(
        `Fetching followers for ${state.userName} with userID ${state.userID}`
      );
      const { userID } = state;
      const { followers, users } = fetchFollowers(userID);
      return { ...state, followers, users };
    }
    default:
      console.log('It shouldn´t reach it here');
      return state;
  }
}

async function fetchUserID(reqUserName) {
  const queryUserID = `http://localhost:3000/api/getuserid/${reqUserName}`;
  const response = await axios.get(queryUserID, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const { data } = response.json();
  console.log(`UserID is ${data}`);
  return { userID: data };
}

async function fetchFollowers(userID) {
  const response = await axios.get(
    `localhost:3000/api/getfollowers/${userID}`,
    {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true,
      },
    }
  );
  const { users, followers } = response.data;
  return { users, followers };
}

function addOneTo(counter, wichButton) {
  const select = { 1: '2', 2: '3', 3: '1' };
  const newCounter = { ...counter };
  newCounter[select[wichButton]]++;
  return { ...newCounter };
}
