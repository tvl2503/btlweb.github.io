const path = require('path');
const { v2 } = require('cloudinary');
const _fs = require('fs');
const fs = require('fs/promises');
exports.removeFileByPathName = async (pathname) => {
  try{
    const response = await fs.unlink(pathname);
    return response;
  }catch(err) {
    console.log(err);
  }
}

exports.uploadFileWithPathName = async (pathname) => {
  try{
    const isExistedFile = _fs.existsSync(pathname);
    if (!isExistedFile) {
      return null;
    }

    const response = await v2.uploader.upload(pathname)
    const secure_url = response.secure_url;
    this.removeFileByPathName(pathname);
    return secure_url;
  }catch(err){
    return err;
  }
};