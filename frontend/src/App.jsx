import { useState } from "react";

import AudioUpload from "./components/AudioUpload";
import TranscriptionHistory from "./components/TranscriptionHistory";

import AudioRecorder from "./components/AudioRecorder";

import TranscriptionResult from "./components/TranscriptionResult";

function App() {
  const [transcription, setTranscription] =
    useState("");

  return (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">

    <div className="max-w-5xl mx-auto">

      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-blue-600 drop-shadow-sm">
          🎤 Speech To Text App
        </h1>

        <p className="text-gray-600 mt-3 text-lg">
          Upload or record audio and convert speech into text using AI
        </p>
      </div>

      {/* Upload + Recorder */}
      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300">
          <AudioUpload
            setTranscription={setTranscription}
          />
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300">
          <AudioRecorder
            setTranscription={setTranscription}
          />
        </div>

      </div>

      {/* Transcription Result */}
      <div className="mt-6 bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300">
        <TranscriptionResult
          transcription={transcription}
        />
      </div>

      {/* History */}
      <div className="mt-6 bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300">
        <TranscriptionHistory />
      </div>

    </div>

  </div>
);
}

export default App;