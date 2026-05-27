const TranscriptionResult = ({
  transcription,
}) => {
  return (
    <div className="p-4 border rounded-lg mt-4">
      <h2 className="text-xl font-bold mb-4">
        Transcription Result
      </h2>

      <p>
        {transcription ||
          "Your transcription will appear here."}
      </p>
    </div>
  );
};

export default TranscriptionResult;