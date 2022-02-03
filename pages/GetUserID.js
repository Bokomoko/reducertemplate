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
  const [inputUserName, setInputUserName] = React.useState('');
  const [localUserID, setLocalUserID] = React.useState('');

  const { userName, userID, listOfFollowers } = state;

  React.useEffect(() => {
    (async () => {
      if (!userName) {
        const localUserID = await fetchUserID(userName);
        setLocalUserID(localUserID);
        dispatch({ type: 'CHANGEUSERID', payload: localUserID });
      }
    })();
  }, [userName]);

  React.useEffect(() => {
    (async () => {
      if (!userID) {
        const localFollowers = await fetchFollowers(userID);
        dispatch({
          type: 'CHANGEUSERID',
          payload: { listOfFollowers: localFollowers },
        });
      }
    })();
  }, [userID]);

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      <input
        type='text'
        placeholder='Enter your Twitter user name'
        onInput={e => {
          setInputUserName(e.target.value);
        }}
      />
      <button
        onClick={e =>
          dispatch({ type: 'SUBMITUSER', payload: { userName: inputUserName } })
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
      {userID && <p>UserID is {userID} </p>}
      {listOfFollowers && <ListOfFollowers tweetUserList={listOfFollowers} />}
    </MyContext.Provider>
  );
}
