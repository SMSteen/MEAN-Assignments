const multer = require('multer');
const path = require('path');
// const UPLOAD_PATH = path.resolve(
//   __dirname,
//   path.join(__dirname, '/dist/pet-shelter')
// );

// set up storage
const storage = multer.diskStorage({
  destination: function(request, file, cb) {
    cb(null, 'dist/ims-overlay/assets');
  },
  filename: function(request, file, cb) {
    cb(
      null,
      file.originalname +
        Date.now().toString() +
        '-' +
        path.extname(file.originalname)
    );
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
  const mimeType = allowedFileTypes.test(file.mimeType);
  if (extension && mimeType) {
    //file is a photo, proceed
    return cb(null, true);
  } else {
    cb('Only images are allowed (JPG, PNG, BMP, GIF).');
  }
};

module.exports = upload;
