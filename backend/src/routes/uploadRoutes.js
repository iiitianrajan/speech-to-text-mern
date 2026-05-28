const express = require("express");
const router = express.Router();

const upload = require("../middleware/multerMiddleware");
const {
  uploadAudio,getTranscriptions
} = require("../controllers/uploadController");

router.post("/upload", upload.single("audio"), uploadAudio);

router.get(
  "/history",
  getTranscriptions
);

module.exports = router;