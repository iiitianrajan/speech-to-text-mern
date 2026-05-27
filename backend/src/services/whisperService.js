const fs = require("fs");

const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const transcribeAudio = async (filePath) => {
  try {
    // OpenAI Whisper API
    const transcription =
      await openai.audio.transcriptions.create({
        file: fs.createReadStream(filePath),

        model: "whisper-1",
      });

    return transcription.text;
  } catch (error) {
    console.log(
      "Whisper API Error:",
      error.message
    );

    // Fallback Response
    return "Transcription service temporarily unavailable (API quota exceeded). Offline fallback response generated.";
  }
};

module.exports = transcribeAudio;