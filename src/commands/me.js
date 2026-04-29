const jwt = require('jsonwebtoken');
const { getCredentials } = require('../utils/auth');

module.exports = async () => {
  const creds = await getCredentials();

  if (!creds) {
    console.log('Not logged in. Run: insighta login');
    return;
  }

  const decoded = jwt.decode(creds.access_token);

  console.log('Current User:');
  console.log({
    id: decoded?.sub,
    role: decoded?.role
  });
};