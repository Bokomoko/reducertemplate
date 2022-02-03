import React from 'react';

import MyContext from '../components/MyContext';
import Reducer from '../components/Reducer';
import { fetchUserID, fetchFollowers } from '../utils/utils';
import ListOfFollowers from '../components/Listoffollowers';

const initialState = {
  userName: '',
  userID: '',
  listOfFollowers: [],
};

export default function GetUserID() {
  const [state, dispatch] = React.useReducer(Reducer, { initialState });
  const [localUserName, setLocalUserName] = React.useState('');
  const [localUserID, setLocalUserID] = React.useState('');

  const { userName, userID, listOfFollowers } = state;

  React.useEffect(() => {
    (async () => {
      if (localUserName) {
        const {userName, userID } = await fetchUserID(localUserName);
        setLocalUserID(localUserID);
        dispatch({ type: 'CHANGEUSERID', payload: {userName, userID }});
      }
    })();
  }, [localUserName,localUserID]);

  React.useEffect(() => {
    (async () => {
      if (localUserID) {
        const localFollowers = await fetchFollowers(localUserID);
        dispatch({
          type: 'CHANGEUSERID',
          payload: { listOfFollowers: localFollowers },
        });
      }
    })();
  }, [userID,localUserID]);

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      <input
        type='text'
        placeholder='Enter your Twitter user name'
        onInput={e => {
          setLocalUserName(e.target.value);
        }}
      />
      <button
        onClick={e =>
          dispatch({ type: 'SUBMITUSER', payload: { userName: localUserName } })
        }
      >
        Get userID
      </button>
      <button
        onClick={e =>
          dispatch({ type: 'FETCHFOLLOWERS', payload: { userID: localUserID } })
        }
      >
        Get followers
      </button>
      {userID && <p>{userName} userID is {userID} </p>}
      {listOfFollowers && <ListOfFollowers tweetUserList={listOfFollowers} />}
    </MyContext.Provider>
  );
}
