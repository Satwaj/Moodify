# Moodify 🎵

Moodify is a full-stack music platform built with the MERN stack, designed to let users discover, manage, and enjoy music based on their mood and preferences.

## Features

- 🔐 User authentication with JWT (HTTP-only cookies)
- 🎧 Browse and stream music tracks
- 📂 Create and manage personalized playlists
- ❤️ Like/favorite songs
- 🔍 Search functionality
- 📱 Responsive UI for desktop and mobile
- 🌓 Dark-themed modern interface

## Tech Stack

**Frontend**
- React (Vite)
- Redux Toolkit
- Tailwind CSS

**Backend**
- Node.js
- Express.js
- MongoDB (Mongoose)

**Authentication**
- JWT (JSON Web Tokens)
- HTTP-only cookies

**Deployment**
- Render (monorepo deployment for client + server)

## Project Structure

```
moodify/
├── client/          # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   └── App.jsx
│   └── package.json
├── server/          # Express backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   └── index.js
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB Atlas account or local MongoDB instance

### Installation

1. Clone the repository
```bash
git clone https://github.com/<your-username>/moodify.git
cd moodify
```

2. Install dependencies for both client and server
```bash
cd server && npm install
cd ../client && npm install
```

3. Set up environment variables (see below)

4. Run the development servers
```bash
# In /server
npm run dev

# In /client
npm run dev
```

## Environment Variables

Create a `.env` file in the `/server` directory with the following:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

## API Endpoints

| Method | Endpoint              | Description           |
|--------|-----------------------|------------------------|
| POST   | /api/auth/register     | Register a new user    |
| POST   | /api/auth/login         | Login user             |
| POST   | /api/auth/logout        | Logout user            |
| GET    | /api/songs              | Get all songs          |
| GET    | /api/songs/:id          | Get song by ID         |
| POST   | /api/playlists          | Create a playlist      |
| GET    | /api/playlists          | Get user playlists      |

## Deployment

This project is deployed on **Render** as a monorepo, with the backend serving the built frontend in production.

## Future Improvements

- AI-based mood detection and song recommendations
- Social sharing of playlists
- Lyrics integration
- Offline playback support

## Author

**Satwaj Bachhav**
🔗 [LinkedIn](https://www.linkedin.com/in/satwaj-bachhav)

## License

This project is licensed under the MIT License.
