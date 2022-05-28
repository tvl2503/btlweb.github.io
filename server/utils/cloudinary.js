const { v2 } = require('cloudinary');
const { CLOUD_API_KEY, CLOUD_API_SECRET_KEY, CLOUD_NAME } = require('../constants');

const configCloudinary = () => {
  return v2.config({
    cloud_name: process.env[CLOUD_NAME],
    api_key: process.env[CLOUD_API_KEY],
    api_secret: process.env[CLOUD_API_SECRET_KEY],
    secure: true
  })
};

module.exports = configCloudinary;