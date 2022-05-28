const { uploadFileWithPathName } = require('../utils/files');
exports.uploadFileController = async (req, res, next) => {
  const files = req.files;
  const image = files[0];
  try {
    const pathImage = image.path;
    const generateUrl = await uploadFileWithPathName(pathImage);
    res.json({
      message: 'successfully',
      code: 200,
      data: generateUrl
    })
    // const removeFolder = await removeFileByPathName(image.path);
  } catch (err) {
    next(err);
  }
};