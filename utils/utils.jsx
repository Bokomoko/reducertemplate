import axios from 'axios'
export function fetchUserID(reqUserName, dispatch) {
  console.log(`fetching user ${reqUserName}`)

  const queryUserID = `http://localhost:3000/api/getuserid/${reqUserName}`;
  axios.get(queryUserID, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(responseJson => dispatch({ type: 'RECEIVEDUSERID', payload: responseJson }))
    .catch(error => dispatch({ type: 'ERRORFETCHUSERID', payload: error }))
}

export async function fetchFollowers(userID) {
  const response = await axios.get(
    `localhost:3000/api/getfollowers/${userID}`,
    {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true,
      },
    }
  );
  const { followers: listOfFollowers } = response.data;
  return { listOfFollowers };
}
