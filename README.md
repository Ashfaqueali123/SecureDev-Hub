🛡️ SecureDev Hub
The Ultimate Cybersecurity Compliance & Education Portal
![alt text](https://img.shields.io/badge/License-MIT-yellow.svg)

![alt text](https://img.shields.io/badge/node-v20.x+-green.svg)

![alt text](https://img.shields.io/badge/react-v18.x-blue.svg)

![alt text](https://img.shields.io/badge/database-MongoDB-47A248.svg)

![alt text](https://img.shields.io/badge/Maintained%3F-yes-green.svg)
SecureDev Hub is a professional-grade defensive security platform designed for development teams. It bridges the gap between coding and compliance by providing real-time security posture tracking, interactive OWASP-aligned checklists, and a centralized threat intelligence blog.
Explore the Docs · Report Bug · Request Feature

🌟 Key Features
📊 Security Compliance Dashboard: Real-time visualization of your application's security posture with automated "Secure Score" calculations.

✅ Interactive OWASP Checklist: Track implementation of critical security controls (XSS, SQLi prevention, CSRF, etc.) categorized by severity.

📰 Threat Intelligence Hub: Centralized feed for Cybersecurity News, Secure Coding Tutorials, and Breach Case Studies.

🔐 JWT-Powered Authentication: Secure login system with role-based access control (RBAC) to separate Admin and Developer functions.

🌙 Modern Tech Aesthetic: Fully responsive, high-contrast Dark Mode UI built with Tailwind CSS for a professional SOC (Security Operations Center) feel.

🛠️ Tech Stack
Frontend
React.js (v18)
Tailwind CSS (Styling)
Lucide React (Security-themed Icons)
Axios (API Communication)
Backend
Node.js & Express.js
MongoDB & Mongoose (Data Modeling)
JSON Web Tokens (JWT) (Secure Auth)
Bcrypt.js (Password Hashing)

🚀 Installation & Setup
Prerequisites
Node.js (v18 or higher)
MongoDB Community Server (Running locally)

1. Clone the Repository
code
Bash
git clone https://github.com/Ashfaqueali123/securedev-hub.git
cd securedev-hub

3. Backend Configuration
code
Bash
cd backend
npm install
Create a .env file in the backend folder:
code
Env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/securedev
JWT_SECRET=your_secret_key
Seed the database with initial security content:
code
Bash
node seed.js
npm start

5. Frontend Configuration
code
Bash
cd ../frontend
npm install
npm start
Your application should now be running at http://localhost:3000!



📂 Project Structure
code
Text






securedev-hub/
├── backend/
│   ├── models/          # Mongoose Schemas (User, Checklist, Article)
│   ├── routes/          # API Endpoints (Auth, Blog, Compliance)
│   ├── middleware/      # JWT Authentication Guards
│   └── server.js        # Entry point
├── frontend/
│   ├── src/
│   │   ├── components/  # Reusable UI (Navbar, Footer, BlogCards)
│   │   ├── pages/       # Home, Dashboard, Login
│   │   └── App.js       # Routing Logic
│   └── tailwind.config.js
└── README.md

















🛡️ Security Best Practices Applied
This project was built following industry-standard security principles:
Password Hashing: Passwords are never stored in plain text (Bcrypt).
Auth Protection: Dashboard routes are protected via JWT middleware.
Data Sanitization: Input validation is implemented to prevent injection.
CORS Policy: Configured to allow only trusted frontend origins.

🗺️ Roadmap

Integration with OWASP ZAP API for real-time scanning metadata.

Exportable PDF Security Audit Reports.

Slack/Discord Webhooks for critical vulnerability alerts.

Multi-tenant support for managing multiple projects.

📄 License
Distributed under the MIT License. See LICENSE for more information.

💡 Tips for your GitHub Repo:
Add a Thumbnail: Create a high-quality screenshot of your Dashboard and place it under the "SecureDev Hub" title.
Commit Often: Show your progress through consistent commits.
Use a .gitignore: Make sure your node_modules and .env files are not uploaded to GitHub!
