const transcribeAudio = require("../services/whisperService");

const uploadAudio = async (req, res) => {
  try {
    // Check uploaded file
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No audio file uploaded",
      });
    }

    // Send audio to Whisper API
    const transcriptionText = await transcribeAudio(
      req.file.path
    );

    // Response
    res.status(200).json({
      success: true,
      message: "Audio transcribed successfully",

      file: req.file,

      transcription: transcriptionText,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  uploadAudio,
};