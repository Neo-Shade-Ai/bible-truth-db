# 🛡 Neo Voice Core — Security Protocols

Neo Voice Core takes security seriously — especially because we're dealing with the most intimate data there is: your **voice**, your **legacy**, and sometimes your **final words**.

---

## 🔐 Data Protection

- **All audio files are encrypted** before upload (AES-256 or equivalent)
- **Secure HTTPS/TLS** used on all endpoints for transit
- Firebase Authentication required for **all access**
- Firestore rules restrict reads/writes to owner UID only
- Optional Arweave uploads are signed and verified using user wallet keys

---

## 🧠 Identity & Access Control

- Role-based permissions (e.g. parent, vault-owner, admin)
- Posthumous access requires multi-factor confirmation (death cert, executor key, etc.)
- No third-party integrations are allowed without explicit consent

---

## 💣 Threat Mitigation

- Realtime alerts for suspicious access patterns (WAF + Firebase Rules)
- Rate limiting, anti-spam, and signature validation on every voice upload
- Future integration of AI anomaly detection for fraud prevention

---

## 📦 Backups & Redundancy

- Firebase Storage and Firestore automatically backed up weekly
- Optional user-triggered archive to Arweave (decentralized, tamper-resistant)

---

## ⚠️ Legal Notice

Neo Voice Core is an **experimental legacy product**. It is not certified for medical, financial, or legal data storage — **use at your own risk**. All modules are built with open-source components and best-practice security configurations, but no system is invincible.

> **Use it wisely. Encrypt it always.**
