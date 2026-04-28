# 🚀 SplitSync: AI-Powered Financial Orchestration 

**Developed by:** Kartikeya Shukla  
**Registration Number:** 25BCE10732  
**Project Context:** Neev AI Internship Assessment (April 2026)

---

## 📖 Project Overview
SplitSync is a high-performance web application designed to solve the complexities of group expense management. By integrating **Large Language Models (LLMs)** with real-time cloud synchronization, SplitSync moves beyond simple ledgers to provide an automated, intelligent financial experience.

---

## ✨ Core Features

### 🧠 1. Hybrid Categorization Engine
To optimize for both speed and intelligence, the app uses a dual-layer approach:
- **Fast-Path Regex Layer**: Instantly categorizes common keywords (Uber, Zomato, Maggi, etc.) locally to ensure zero-latency UI updates.
- **LLM Fallback (Gemini 1.5 Flash)**: For complex or unique descriptions, the system is architected to call the Google Gemini API for deep contextual analysis.

### ⚖️ 2. Optimized Debt Settlement
Implements a custom algorithm that calculates the individual balances and generates the **minimum number of transactions** required to settle all debts within a group.

### ☁️ 3. Real-time Cloud Synchronization
Integrated with **Firebase Firestore**, ensuring that every transaction is synchronized across all users instantly without manual refreshing.

### 🔐 4. Hybrid Authentication
- **Firebase Auth**: Secure, persistent user accounts.
- **Master User Bypass**: Includes a "Demo Mode" login for reviewers to access the dashboard instantly without creating new credentials.

---

## 🛠️ Technical Stack

| Category | Technology |
| :--- | :--- |
| **Frontend** | React.js (Vite) |
| **Styling** | Tailwind CSS (Glassmorphic Design) |
| **Database** | Firebase Firestore |
| **Auth** | Firebase Authentication |
| **AI/LLM Interface** | Google Gemini 1.5 Flash API |

---

## 🚀 Setup & Security

### 🗝️ API Security Note
For security purposes, the **Gemini API Key** and **Firebase Config** have been removed from the public source code. 

To run this project with full AI capabilities:
1. Obtain an API Key from [Google AI Studio](https://aistudio.google.com/).
2. In `src/App.jsx`, locate the `GEMINI_API_KEY` constant and paste your key.
3. Add your Firebase credentials to `src/firebase.js`.

### 📦 Installation
1. **Clone the Repo**
   ```bash
   git clone [https://github.com/kartikeyyyyyaa/SPLITSYNC.git](https://github.com/kartikeyyyyyaa/SPLITSYNC.git)
