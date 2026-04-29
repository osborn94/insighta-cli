const fs = require('fs-extra');
const { CONFIG_PATH } = require('./config');

exports.saveCredentials = async (data) => {
  await fs.ensureFile(CONFIG_PATH);
  await fs.writeJson(CONFIG_PATH, data, { spaces: 2 });
};

exports.getCredentials = async () => {
  try {
    return await fs.readJson(CONFIG_PATH);
  } catch {
    return null;
  }
};

exports.clearCredentials = async () => {
  await fs.remove(CONFIG_PATH);
};