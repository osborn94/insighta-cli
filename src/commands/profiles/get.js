const { apiRequest } = require('../../utils/api');

module.exports = async (id) => {
  const res = await apiRequest('get', `/profiles/${id}`);
  console.log(res.data);
};