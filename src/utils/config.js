const path = require('path');
const os = require('os');

exports.CONFIG_PATH = path.join(
  os.homedir(),
  '.insighta',
  'credentials.json'
);