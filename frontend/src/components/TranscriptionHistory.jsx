import { useEffect, useState } from "react";

import API from "../services/api";

const TranscriptionHistory = () => {
  const [history, setHistory] =
    useState([]);

  const fetchHistory = async () => {
    try {
      const response = await API.get(
        "/audio/history"
      );

      setHistory(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

 return (
  <div className="mt-6">
    <h2 className="text-2xl font-bold text-gray-800 mb-6">
      Previous Transcriptions
    </h2>

    {history.length === 0 ? (
      <div className="bg-gray-50 border rounded-xl p-6 text-center text-gray-500">
        No transcription history found.
      </div>
    ) : (
      <div className="grid gap-4">
        {history.map((item) => (
          <div
            key={item._id}
            className="
              bg-white
              border
              rounded-xl
              p-5
              shadow-md
              hover:shadow-xl
              transition-all
              duration-300
            "
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-semibold text-lg text-blue-600 break-all">
                {item.fileName}
              </h3>

              <span className="text-xs text-gray-500">
                {new Date(
                  item.createdAt
                ).toLocaleDateString()}
              </span>
            </div>

            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-gray-700 whitespace-pre-wrap">
                {item.transcriptionText}
              </p>
            </div>

            <p className="text-sm text-gray-500 mt-3">
              {new Date(
                item.createdAt
              ).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    )}
  </div>
);
};

export default TranscriptionHistory;