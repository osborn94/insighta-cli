const axios = require('axios');
const { getCredentials } = require('./auth');

const BASE_URL = 'http://localhost:3000/api/v1';

exports.apiRequest = async (method, url, params = {}, data = null) => {
  const creds = await getCredentials();

  if (!creds) {
    console.log('Not logged in. Run: insighta login');
    process.exit(1);
  }

  try {
    const res = await axios({
      method,
      url: `${BASE_URL}${url}`,
      params,
      data,
      headers: {
        Authorization: `Bearer ${creds.access_token}`,
        'X-API-Version': '1'
      }
    });

    return res.data;
  } catch (err) {
    console.error('Error:', err.response?.data || err.message);
    process.exit(1);
  }
};