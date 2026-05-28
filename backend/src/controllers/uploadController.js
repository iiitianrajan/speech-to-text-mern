const transcribeAudio = require(
  "../services/deepgramService"
);

const uploadAudio = async (req, res) => {
  try {
    // Check file
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No audio file uploaded",
      });
    }

    // AI transcription
    const transcriptionText =
      await transcribeAudio(req.file.path);

    // Response
    res.status(200).json({
      success: true,
      message:
        "Audio transcribed successfully",

      transcription: transcriptionText,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  uploadAudio,
};