const fs = require("fs");

const axios = require("axios");

const transcribeAudio = async (filePath) => {
  try {
    // Read uploaded audio file
    const audioBuffer =
      fs.readFileSync(filePath);

    // Send request to Deepgram API
    const response = await axios.post(
      "https://api.deepgram.com/v1/listen",

      audioBuffer,

      {
        headers: {
          Authorization: `Token ${process.env.DEEPGRAM_API_KEY}`,

          "Content-Type":
            "application/octet-stream",
        },

        params: {
          model: "nova-2",

          smart_format: true,
        },
         timeout: 30000,
      }
    );

    // Extract transcription text
    const transcription =
  response.data.results.channels[0]
    .alternatives[0].transcript;

if (
  !transcription ||
  transcription.trim() === ""
) {
  throw new Error(
    "No speech detected in audio"
  );
}

return transcription;
  } catch (error) {
  console.log(
    "Deepgram Error:",
    error.response?.data || error.message
  );

  if (error.code === "ECONNABORTED") {
    throw new Error(
      "Transcription request timed out"
    );
  }

  if (error.response?.status === 401) {
    throw new Error(
      "Invalid Deepgram API key"
    );
  }

  if (error.response?.status === 429) {
    throw new Error(
      "Deepgram API rate limit exceeded"
    );
  }

  throw new Error(
    "Failed to generate transcription"
  );
}
};

module.exports = transcribeAudio;