const { Router } = require('express');
const { uploadFileController } = require('../controller');

const router = Router();

router.post('/file', uploadFileController);

module.exports = router;