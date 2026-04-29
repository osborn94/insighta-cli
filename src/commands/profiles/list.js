const { apiRequest } = require('../../utils/api');

module.exports = async (opts) => {
  const res = await apiRequest('get', '/profiles', opts);
  console.table(res.data);
};