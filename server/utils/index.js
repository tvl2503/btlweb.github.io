const crypto = require('crypto');
const moment = require('moment');

const generateRandom = (cb) => {
  crypto.randomBytes(8, (err, buffer) => {
    if (err) {
      return cb(err);
    };
    return cb(buffer.toString('hex'));
  });
};

const getTimeToday = () => {
  return moment().format('DD-MM-YYYY');
};

module.exports = {
  generateRandom,
  getTimeToday
}