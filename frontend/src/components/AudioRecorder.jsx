import { useState, useRef } from "react";

const AudioRecorder = () => {
  const [isRecording, setIsRecording] =
    useState(false);

  const mediaRecorderRef = useRef(null);

  const startRecording = async () => {
    const stream =
      await navigator.mediaDevices.getUserMedia({
        audio: true,
      });

    const mediaRecorder =
      new MediaRecorder(stream);

    mediaRecorderRef.current = mediaRecorder;

    mediaRecorder.start();

    setIsRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();

    setIsRecording(false);
  };

  return (
    <div className="p-4 border rounded-lg mt-4">
      <h2 className="text-xl font-bold mb-4">
        Record Audio
      </h2>

      {!isRecording ? (
        <button
          onClick={startRecording}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Start Recording
        </button>
      ) : (
        <button
          onClick={stopRecording}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Stop Recording
        </button>
      )}
    </div>
  );
};

export default AudioRecorder;