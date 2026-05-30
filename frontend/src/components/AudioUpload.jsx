import { useState } from "react";

import API from "../services/api";

const AudioUpload = ({ setTranscription }) => {
  const [audioFile, setAudioFile] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const handleFileChange = (e) => {
    setAudioFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!audioFile) {
      return alert("Please select audio file");
    }

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("audio", audioFile);

      const response = await API.post(
        "/audio/upload",
        formData
      );

      setTranscription(
  response.data.data.transcriptionText
);
    } catch (error) {
      console.log(error);

      alert("Upload Failed");
    } finally {
      setLoading(false);
    }
  };
return (
  <div>
    <h2 className="text-2xl font-bold text-gray-800 mb-4">
      Upload Audio File
    </h2>

    <label className="block w-full cursor-pointer">
      <div className="border-2 border-dashed border-blue-300 rounded-xl p-6 text-center hover:border-blue-500 transition duration-300">
        <p className="text-gray-600">
          Click to select an audio file
        </p>

        <input
          type="file"
          accept="audio/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
    </label>

    {audioFile && (
      <div className="mt-4 inline-block bg-green-100 text-green-700 px-3 py-2 rounded-lg text-sm">
        {audioFile.name}
      </div>
    )}

    <button
      onClick={handleUpload}
      disabled={loading}
      className="
        mt-5
        w-full
        bg-blue-600
        hover:bg-blue-700
        text-white
        font-semibold
        py-3
        rounded-xl
        shadow-md
        hover:shadow-xl
        transition-all
        duration-300
        disabled:bg-gray-400
      "
    >
      {loading
        ? "Generating Transcription..."
        : "Upload & Transcribe"}
    </button>
  </div>
);
};

export default AudioUpload;