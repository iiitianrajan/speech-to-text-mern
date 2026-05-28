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
      <h2 className="text-2xl font-bold mb-4">
        Previous Transcriptions
      </h2>

      <div className="space-y-4">
        {history.map((item) => (
          <div
            key={item._id}
            className="border p-4 rounded-lg shadow"
          >
            <h3 className="font-semibold">
              {item.fileName}
            </h3>

            <p className="text-gray-700 mt-2">
              {item.transcriptionText}
            </p>

            <p className="text-sm text-gray-500 mt-2">
              {new Date(
                item.createdAt
              ).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TranscriptionHistory;