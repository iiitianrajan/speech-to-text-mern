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
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">
        Record Audio
      </h2>

      {!isRecording ? (
        <button
          onClick={startRecording}
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {loading
            ? "Processing..."
            : "Start Recording"}
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