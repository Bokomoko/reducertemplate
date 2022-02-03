import React from 'react';

import MyContext from '../components/MyContext';
import Reducer from '../components/Reducer';
import ListOfFollowers from '../components/Listoffollowers';

const initialState = {
  userName: '',
  userID: '',
  listOfFollowers: [],
};

export default function GetUserID() {
  const [state, dispatch] = React.useReducer(Reducer, { initialState });
  
  const { userName, userID, listOfFollowers } = state;
    
  return (
    <MyContext.Provider value={{ state, dispatch }}>
      <input
        type='text'
        placeholder='Enter your Twitter user name'
        onInput={e => {
          dispatch( {type:"CHANGEUSERNAME", payload:e.target.value})
        }}
      />
      <button
        onClick={e =>
          dispatch({ type: 'GETUSERID'  })
        }
      >
        Get userID
      </button>
      <button
        onClick={e =>
          dispatch({ type: 'GETFOLLOWERS' })
        }
      >
        Get followers
      </button>
      {userID && <p>{userName} userID is {userID} </p>}
      {listOfFollowers && <ListOfFollowers tweetUserList={listOfFollowers} />}
    </MyContext.Provider>
  );
}
