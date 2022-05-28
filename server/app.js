const express = require('express');
const path = require('path');
const multer = require('multer');
const { getTimeToday, generateRandom } = require('./utils');
const { KEY_MULTER } = require('./constants');
const configCloudinary = require('./utils/cloudinary');
const uploadRouter = require('./routes');
const corsController = require('./controller/cors');
const useCorsController = require('./controller/cors');

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const configMulter = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, path.join(__dirname, 'upload'));
  },
  filename: function (req, file, cb) {
    generateRandom(random => {
      return cb(null, getTimeToday() + '-' + random + '-' + file.originalname);
    })
  }
})

app.use(multer({
  storage: configMulter
}).array(KEY_MULTER));

configCloudinary();

app.use(useCorsController);

app.use('/api/upload', uploadRouter);

app.use((err, req, res, next) => {
  const msg = err.message || 'Server Internal Error';
  const code = err.code || 500;

  res.json({
    message: msg,
    code: code
  })
});
app.listen(9000);