# 🔊 Neo Voice Core

**Neo Voice Core** is the audio intelligence hub of the NeoLegacy platform. It handles voice recording, secure storage, transcription, and future delivery of legacy voice messages. Whether it's confessions, bedtime stories, or final words — this is where voice becomes eternal.

---

## 🎯 Purpose

This module powers:
- 🎙 Real-time voice recording via browser or mobile
- 🔐 Secure upload to Firebase or Arweave (via Bundlr)
- ✍️ Transcription into searchable text
- 🧒 Linking voice messages to child profiles or memory vaults
- 🗓 Future delivery via time/date triggers or posthumous conditions

---

## 🎤 Features

- In-browser and mobile-compatible audio recorder
- Upload to Firebase Storage or decentralized Bundlr (Arweave)
- Optional transcription via OpenAI Whisper or Google Speech-to-Text
- Delivery tagging (immediate, birthday, posthumous, etc.)
- Secure indexing via Firestore or Vault Core
- Designed with ethical storage, legacy protection, and data transparency

---

## 🧩 Connected Modules

| Module | Purpose |
|--------|---------|
| `NeoLegacy` | Frontend UI that activates the voice recorder |
| `NeoLegacy-Vault-Core` | Securely stores and indexes voice files |
| `neo-msg-deliver` | Handles scheduled and posthumous delivery logic |
| `neo-voice-lab` | Optional audio lab for enhancement, cloning, or AI synthesis |

---

## 🧪 Tech Stack

- React (UI component)
- Firebase Storage & Firestore (for metadata + retrieval)
- Arweave via Bundlr (decentralized long-term storage)
- OpenAI Whisper or Google Speech-to-Text (optional transcription)
- mic-recorder-to-mp3 or WebRTC API (for recording)

---

## 📂 Folder Structure

neo-voice-core/
├── components/
│ └── VoiceRecorder.jsx
├── hooks/
│ └── useAudioCapture.js
├── services/
│ ├── firebaseUpload.js
│ ├── arweaveUpload.js
│ └── transcribeAudio.js
├── utils/
│ └── deliveryScheduler.js
├── index.js
├── README.md

---

## 🔐 Security & Privacy

Neo Voice Core does **not** store or share any data without explicit user consent. Voice messages are encrypted during upload and linked only to authenticated profiles. Posthumous triggers require validated identity and death confirmation.

This system complies with:
- GDPR (data transparency & deletion rights)
- HIPAA-like optional compliance (for sensitive family data)
- Future digital legacy legislation (pending)

---

## ⚠️ Disclaimer

Neo Voice Core is an **experimental legacy tool** developed as part of the NeoLegacy platform. It is **not intended to diagnose, treat, or replace legal estate planning or end-of-life documentation**. All use is voluntary and at the user's discretion.

---

## 🧠 Final Thought

Your voice can outlive you — but only if you leave it behind with purpose.

Neo Voice Core helps you do just that.

---
