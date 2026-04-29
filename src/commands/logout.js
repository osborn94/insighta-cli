const { clearCredentials } = require('../utils/auth');

module.exports = async () => {
  await clearCredentials();
  console.log('Logged out');
};