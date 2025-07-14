# 🔊 Neo Voice Core

**Neo Voice Core** is the audio intelligence hub of the NeoLegacy platform. It handles voice recording, secure storage, transcription, and future delivery of legacy voice messages. Whether it's confessions, bedtime stories, or final words — this is where voice becomes eternal.

---

## 🎯 Purpose

This module powers:
- Real-time voice recording via browser or mobile
- Secure upload to Firebase or Arweave
- Transcription into searchable text
- Linking voice messages to child profiles or memory vaults
- Future delivery via time/date trigger or posthumous conditions

---

## 🎤 Features

- 🎙 In-browser and mobile-compatible audio recorder
- 🔐 Upload to Firebase Storage or decentralized Bundlr (Arweave)
- ✍️ Optional transcription via OpenAI Whisper or Google Speech-to-Text
- 🗓 Tag with delivery instructions (immediate, birthday, posthumous)
- 🔁 Links to user vault and message delivery engine

---

## 🧩 Connected Modules

| Module | Purpose |
|--------|---------|
| `NeoLegacy` | Frontend UI that activates the voice recorder |
| `NeoLegacy-Vault-Core` | Stores and indexes voice files securely |
| `neo-msg-deliver` | Schedules delivery of voice messages |
| `neo-voice-lab` | Optional lab for audio enhancement, cloning, AI voice synthesis |

---

## 🧪 Tech Stack

- React (UI Component)
- Firebase Storage
- Firebase Firestore (voice metadata)
- Arweave (via Bundlr SDK)
- OpenAI Whisper API (optional)
- Mic-recorder-to-mp3 (or WebRTC-based capture)

---

## 📂 Folder Structure


