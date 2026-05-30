const multer = require("multer");
const path = require("path");

// Storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "src/uploads/");
  },

  filename: (req, file, cb) => {
    const uniqueName = Date.now() + path.extname(file.originalname);
    cb(null, uniqueName);
  },
});

// File filter
const fileFilter = (req, file, cb) => {
  const allowedTypes = [
  "audio/mpeg",
  "audio/wav",
  "audio/webm",
];

const isValid =
  allowedTypes.includes(
    file.mimetype
  );

  if (isValid) {
    cb(null, true);
  } else {
   cb(
  new Error(
    "Invalid file type. Please upload MP3, WAV, or WEBM audio files only."
  )
);
  }
};

const upload = multer({
  storage,

  fileFilter,

  limits: {
    fileSize: 10 * 1024 * 1024,
  },
});
module.exports = upload;