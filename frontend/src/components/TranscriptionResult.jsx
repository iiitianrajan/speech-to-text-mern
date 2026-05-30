const TranscriptionResult = ({
  transcription,
}) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(
      transcription
    );
  };

  return (
    <div className="border rounded-xl p-6 shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Transcription Result
      </h2>

      <div className="bg-gray-50 border rounded-lg p-4 min-h-[120px]">
        <p className="text-gray-700 whitespace-pre-wrap">
          {transcription ||
            "Your transcription will appear here."}
        </p>
      </div>

      {transcription && (
        <button
          onClick={copyToClipboard}
          className="
            mt-4
            bg-green-600
            hover:bg-green-700
            text-white
            px-4
            py-2
            rounded-lg
            transition-all
            duration-300
            shadow-md
            hover:shadow-lg
          "
        >
          Copy Text
        </button>
      )}
    </div>
  );
};

export default TranscriptionResult;