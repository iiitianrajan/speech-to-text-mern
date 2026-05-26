import { useState } from "react";

const AudioUpload = () => {
  const [audioFile, setAudioFile] = useState(null);

  const handleFileChange = (e) => {
    setAudioFile(e.target.files[0]);
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
    </div>
  );
};

export default AudioUpload;