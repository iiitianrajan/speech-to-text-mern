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
      }
    );

    // Extract transcription text
    const transcription =
      response.data.results.channels[0]
        .alternatives[0].transcript;

    return transcription;
  } catch (error) {
    console.log(
      "Deepgram Error:",
      error.response?.data || error.message
    );

    throw error;
  }
};

module.exports = transcribeAudio;