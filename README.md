# 🚀 SplitSync: AI-Powered Financial Orchestration 

**Developed by:** Kartikeya Shukla  
**Project Context:** Neev AI Internship Assessment (April 2026)

---

## 📖 Project Overview
SplitSync is a high-performance web application designed to solve the complexities of group expense management. By integrating advanced **Large Language Models (LLMs)** with real-time cloud synchronization, SplitSync moves beyond simple ledgers to provide an automated, intelligent financial experience.

The core mission of this project was to bridge the gap between **Natural Language Processing** and **Functional Utility**, creating a tool that doesn't just record transactions—it understands them.

---

## ✨ Core Features

### 🧠 1. Intelligent Categorization Engine (Gemini 1.5 Flash)
The standout feature of SplitSync is its hybrid AI engine. 
- **High-Speed Regex Layer**: Instantly categorizes common keywords (Uber, Zomato, Airbnb) locally for zero-latency UI updates.
- **LLM Fallback**: For complex or ambiguous titles (e.g., "Midnight street food in Lucknow"), the app calls the **Google Gemini API** to contextually identify the category.

### ⚖️ 2. Optimized Debt Settlement Algorithm
Say goodbye to "who owes whom" confusion. The app implements a custom settlement algorithm that:
- Aggregates all group expenses.
- Calculates individual balances.
- Generates the **minimum number of transactions** required to settle all debts.

### ☁️ 3. Real-time Cloud Synchronization
Integrated with **Firebase Firestore**, SplitSync ensures that every group member sees updates the millisecond they happen. 
- **Real-time Snapshots**: No manual refreshing needed.
- **Persistent Storage**: All trips and ledgers are saved securely in the cloud.

### 🔐 4. Hybrid Authentication System
To ensure a smooth demo experience, the app features:
- **Firebase Auth**: For secure, persistent user accounts.
- **Master User Bypass**: A high-speed entry point for demonstration purposes, ensuring the dashboard is accessible even in low-connectivity environments.

### 📊 5. Financial Insight Dashboard
A sleek, glassmorphic UI providing:
- **Monthly Spending Share**: Real-time tracking of personal financial impact.
- **Category Breakdown**: Visual distribution of expenses.
- **AI Insights**: Contextual advice based on spending patterns.

---

## 🛠️ Technical Stack

| Category | Technology |
| :--- | :--- |
| **Frontend** | React.js (Vite) |
| **Styling** | Tailwind CSS (Utility-First) |
| **Database** | Firebase Firestore |
| **Auth** | Firebase Authentication |
| **AI/LLM** | Google Gemini 1.5 Flash API |
| **Icons/UI** | Lucide-React & Custom Emojis |

---

## 🚀 Installation & Setup

1. **Clone the Repository**
   ```bash
   git clone [https://github.com/kartikeyyyyyaa/SPLITSYNC.git](https://github.com/kartikeyyyyyaa/SPLITSYNC.git)
