# Speech To Text MERN Application

## Project Overview

This project is a full-stack MERN Speech-to-Text application that allows users to upload or record audio and convert speech into text using AI-powered transcription APIs.

---

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

---

# Tech Stack

* React.js
* Node.js
* Express.js
* MongoDB
* Tailwind CSS
* OpenAI Whisper API

---

# Current Status

## Day 1 Completed

* Project setup completed
* Frontend initialized using Vite
* Backend initialized using Express.js
* Tailwind CSS configured
* GitHub repository setup completed
* README documentation added


## Day 2 Completed

* Configured Express.js backend server
* Installed and configured multer middleware
* Created audio upload API endpoint
* Implemented audio file validation
* Successfully tested file upload using Hoppscotch
* Stored uploaded files locally in uploads directory

## Day 3 Completed

* Configured MongoDB Atlas cloud database
* Connected backend with MongoDB using Mongoose
* Created transcription schema model
* Added environment variables for secure database connection
* Successfully tested database insertion and retrieval

## Day 4 Completed

* Integrated OpenAI Whisper API
* Created speech-to-text service layer
* Implemented AI audio transcription
* Connected uploaded audio files to Whisper API
* Successfully generated transcription text from audio

## Day 5 Completed

* Created frontend audio upload UI
* Implemented audio recording functionality using MediaRecorder API
* Added transcription result section
* Styled frontend components using Tailwind CSS
* Structured frontend using reusable React components

## Day 6 Completed

* Connected React frontend with Express backend
* Implemented Axios API integration
* Sent audio files from frontend to backend
* Displayed loading states during transcription
* Successfully displayed Whisper AI transcription results on frontend





