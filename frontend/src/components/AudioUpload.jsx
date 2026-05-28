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
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">
        Upload Audio File
      </h2>

      <input
        type="file"
        accept="audio/*"
        onChange={handleFileChange}
      />

      {audioFile && (
        <p className="mt-2 text-green-600">
          Selected: {audioFile.name}
        </p>
      )}

      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        {loading ? "Processing..." : "Upload"}
      </button>
    </div>
  );
};

export default AudioUpload;