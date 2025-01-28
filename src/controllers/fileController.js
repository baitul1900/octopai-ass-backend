const { uploadFile } = require('../services/fileService.js');

const handleFileUpload = async (req, res) => {
  try {
    const fileData = await uploadFile(req.file);
    res.json({ success: true, fileData });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { handleFileUpload };
