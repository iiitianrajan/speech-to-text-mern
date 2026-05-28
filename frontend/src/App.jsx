import { useState } from "react";

import AudioUpload from "./components/AudioUpload";
import TranscriptionHistory from "./components/TranscriptionHistory";

import AudioRecorder from "./components/AudioRecorder";

import TranscriptionResult from "./components/TranscriptionResult";

function App() {
  const [transcription, setTranscription] =
    useState("");

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-6">

        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
          Speech To Text App
        </h1>

        <AudioUpload
          setTranscription={setTranscription}
        />
        <AudioRecorder
          setTranscription={setTranscription}
        />

        <TranscriptionResult
          transcription={transcription}
        />

        <TranscriptionHistory />
      </div>
    </div>
  );
}

export default App;