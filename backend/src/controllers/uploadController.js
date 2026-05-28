const transcribeAudio = require(
  "../services/deepgramService"
);

const Transcription = require(
  "../models/transcriptionModel"
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

    // save transcription in database
    const savedTranscription =
      await Transcription.create({
        fileName: req.file.originalname,

        filePath: req.file.path,

        transcriptionText,
      });

    // Response
    res.status(200).json({
      success: true,
      message:
        "Audio transcribed successfully",

      data: savedTranscription,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getTranscriptions = async (
  req,
  res
) => {
  try {
    const transcriptions =
      await Transcription.find().sort({
        createdAt: -1,
      });

    res.status(200).json({
      success: true,
      data: transcriptions,
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
  getTranscriptions,
};