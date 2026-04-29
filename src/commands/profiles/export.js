const axios = require('axios');
const fs = require('fs');
const { getCredentials } = require('../../utils/auth');

module.exports = async (opts) => {
  const creds = await getCredentials();

  const res = await axios.get(
    'http://localhost:3000/api/v1/profiles/export',
    {
      params: opts,
      headers: {
        Authorization: `Bearer ${creds.access_token}`,
        'X-API-Version': '1'
      },
      responseType: 'stream'
    }
  );

  const file = fs.createWriteStream('profiles.csv');
  res.data.pipe(file);

  console.log('CSV downloaded as profiles.csv');
};