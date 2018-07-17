const multer = require('multer');
const path = require('path');

// set up storage
const storage = multer.diskStorage({
  destination: function(request, file, cb) {
    cb(null, './public/uploads/');
  },
  filename: function(request, file, cb) {
    cb(null, Date.now().toString() + '-' + file.originalname);
  }
});

// set up upload limits
const upload = multer({
  storage: storage,
  limits: { fileSize: 100000000 },
  fileFilter: function(request, file, cb) {
    validateFile(file, cb);
  }
});

const validateFile = function(file, cb) {
  allowedFileTypes = /jpeg|jpg|png|gif|bmp/;
  const extension = allowedFileTypes.test(
    path.extname(file.originalname).toLowerCase()
  );
  const mimeType = allowedFileTypes.test(file.mimetype);
  if (extension && mimeType) {
    //file is a photo, proceed
    return cb(null, true);
  } else {
    //throw error, file unacceptable
    cb('Only images are allowed (JPG, PNG, BMP, GIF).');
  }
};

module.exports = upload;
