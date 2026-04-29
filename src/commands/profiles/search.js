const { apiRequest } = require('../../utils/api');

module.exports = async (query) => {
  const res = await apiRequest('get', '/profiles/search', { q: query });
  console.table(res.data);
};