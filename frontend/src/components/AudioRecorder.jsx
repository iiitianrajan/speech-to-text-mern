import { useState, useRef } from "react";

import API from "../services/api";

const AudioRecorder = ({
  setTranscription,
}) => {
  const [isRecording, setIsRecording] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const mediaRecorderRef = useRef(null);

  const audioChunksRef = useRef([]);

  // Start Recording
  const startRecording = async () => {
    try {
      // Get microphone access
      const stream =
        await navigator.mediaDevices.getUserMedia(
          {
            audio: true,
          }
        );

      // Create media recorder
      const mediaRecorder =
        new MediaRecorder(stream);

      mediaRecorderRef.current =
        mediaRecorder;

      // Store recorded chunks
      mediaRecorder.ondataavailable = (
        event
      ) => {
        audioChunksRef.current.push(
          event.data
        );
      };

      // Start recording
      mediaRecorder.start();

      setIsRecording(true);
    } catch (error) {
      console.log(error);

      alert(
        "Microphone access denied"
      );
    }
  };

  // Stop Recording
  const stopRecording = async () => {
    mediaRecorderRef.current.stop();

    mediaRecorderRef.current.onstop =
      async () => {
        try {
          setLoading(true);

          // Create audio blob
          const audioBlob = new Blob(
            audioChunksRef.current,
            {
              type: "audio/wav",
            }
          );

          // Create audio file
          const audioFile = new File(
            [audioBlob],
            "recording.wav",
            {
              type: "audio/wav",
            }
          );

          // Create form data
          const formData =
            new FormData();

          formData.append(
            "audio",
            audioFile
          );

          // Send to backend
          const response =
            await API.post(
              "/audio/upload",
              formData
            );

          // Update transcription
          setTranscription(
            response.data.data
              .transcriptionText
          );

          // Clear audio chunks
          audioChunksRef.current = [];
        } catch (error) {
          console.log(error);

          alert(
            "Recording upload failed"
          );
        } finally {
          setLoading(false);
        }
      };

    setIsRecording(false);
  };

 return (
  <div>
    <h2 className="text-2xl font-bold text-gray-800 mb-4">
      Record Audio
    </h2>

    <div className="border rounded-xl p-6 bg-gray-50">

      <div className="mb-4">
        <span
          className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
            isRecording
              ? "bg-red-100 text-red-600"
              : "bg-green-100 text-green-600"
          }`}
        >
          {isRecording
            ? "Recording"
            : "Ready"}
        </span>
      </div>

      {!isRecording ? (
        <button
          onClick={startRecording}
          disabled={loading}
          className="
            w-full
            bg-green-600
            hover:bg-green-700
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
            ? "Processing..."
            : "Start Recording"}
        </button>
      ) : (
        <button
          onClick={stopRecording}
          className="
            w-full
            bg-red-600
            hover:bg-red-700
            text-white
            font-semibold
            py-3
            rounded-xl
            shadow-md
            hover:shadow-xl
            transition-all
            duration-300
          "
        >
          Stop Recording
        </button>
      )}
    </div>
  </div>
);
};

export default AudioRecorder;