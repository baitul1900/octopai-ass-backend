const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  
  const uploadFile = async (file) => {
    try {
      const result = await cloudinary.uploader.upload(file.path, {
        resource_type: 'auto',
      });
      return {
        url: result.secure_url,
        size: file.size,
        type: file.mimetype,
      };
    } catch (error) {
      throw new Error('File upload failed');
    }
  };
  
  module.exports = { uploadFile };
  