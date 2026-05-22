# MERN Stack Overview

## MongoDB

MongoDB is a NoSQL database used to store audio file information and transcription data.

## Express.js

Express.js is used to create backend APIs and handle requests from the frontend.

## React.js

React.js is used to build the frontend user interface for audio upload, recording, and displaying transcriptions.

## Node.js

Node.js provides the runtime environment for the backend server.

---

# How Speech-to-Text APIs Work

Speech-to-Text APIs convert spoken audio into readable text using machine learning and artificial intelligence models.

## Workflow

```text id="mjlwm8"
User Uploads Audio
        ↓
Frontend Sends Audio To Backend
        ↓
Backend Sends Audio To Speech API
        ↓
Speech API Processes Audio
        ↓
Transcribed Text Returned
        ↓
Frontend Displays Result
```

---

# Speech-to-Text Provider Used

This project uses the OpenAI Whisper API for accurate speech recognition and transcription generation.
