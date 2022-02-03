import axios from 'axios';

export default async function handler(req, res) {
  const { username } = req.query;
  console.log( "consultando username ",username)
  const queryUserID = `https://api.twitter.com/2/users/by/username/${username}`;
  const bearerToken = process.env.BEARER_TOKEN;
  const options = {
    headers: {
      'User-Agent': 'Twitter-User-ID-Fetcher',
      authorization: `Bearer ${bearerToken}`,
    },
  };
  try {
    const { data } = await axios.get(queryUserID, options);
    const { userID } = data.data.id;
    console.log('Recovered userID: ', userID);
    res.send(JSON.stringify({ username, userID }));
    res.end()

  }
  catch (error){
    console.log("Error during fetch userid")
    res.end()

  }
}
