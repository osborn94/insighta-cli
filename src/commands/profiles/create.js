const { apiRequest } = require('../../utils/api');

module.exports = async (opts) => {
  if (!opts.name) {
    console.log('Name is required');
    return;
  }

  const res = await apiRequest('post', '/profiles', {}, {
    name: opts.name
  });

  console.log(res.data);
};