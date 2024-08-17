# Chat Application

A modern chat application that supports real-time messaging, voice/video calls, and rich features for an engaging user experience. Built with a tech stack including Node.js, Express, WebRTC, Socket.IO, GraphQL, MongoDB, Redis, and more.

## Features

- **Real-Time Messaging**: Seamless real-time chat with support for channels and direct messages.
- **Voice/Video Calls**: Peer-to-peer voice and video communication using WebRTC.
- **Rich Text Formatting**: Support for rich text messages and media sharing.
- **User Authentication**: Secure authentication with JWT and user management.
- **Search and Discovery**: Advanced search capabilities with ElasticSearch.
- **Desktop Application**: Available as a cross-platform desktop app using Electron.

## Tech Stack

### Frontend

- **React**: JavaScript library for building user interfaces.
- **Vite**: Build tool for fast development and optimized production builds.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Electron**: Framework for building cross-platform desktop applications.
- **GraphQL Client**: For querying and mutating data with the backend.
- **Socket.IO**: For real-time communication with the server.
- **WebRTC**: For peer-to-peer voice and video calls.
- **TypeScript**: Superset of JavaScript with static typing.

### Backend

- **Node.js**: JavaScript runtime for server-side code.
- **Express.js**: Web framework for building RESTful APIs.
- **Socket.IO (Backend)**: For real-time messaging.
- **WebRTC (Backend)**: For handling signaling servers for peer-to-peer connections.
- **GraphQL**: For flexible and efficient data querying.
- **MongoDB**: NoSQL database for storing application data.
- **Redis**: In-memory data store for caching and session management.
- **JWT**: For secure user authentication.
- **ElasticSearch**: For advanced search functionality.
- **Docker**: Containerization for consistent environments.
- **CI/CD Pipelines**: Automated testing and deployment using GitHub Actions.

## Installation

### Backend

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/chat-app.git
   cd chat-app/backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the `backend/` directory and add your environment variables. Example:

   ```
   MONGODB_URI=mongodb://localhost:27017/chat-app
   JWT_SECRET=your_jwt_secret
   REDIS_URL=redis://localhost:6379
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend

1. Navigate to the `frontend/` directory:

   ```bash
   cd chat-app/frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the `frontend/` directory and add your environment variables. Example:

   ```
   VITE_API_URL=http://localhost:5000/api
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

### Electron

1. Navigate to the `electron/` directory:

   ```bash
   cd chat-app/electron
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the Electron application:
   ```bash
   npm start
   ```

## Testing

### Backend

1. Run backend tests:
   ```bash
   cd chat-app/backend
   npm test
   ```

### Frontend

1. Run frontend tests:
   ```bash
   cd chat-app/frontend
   npm test
   ```

## Deployment

1. Build the frontend for production:

   ```bash
   cd chat-app/frontend
   npm run build
   ```

2. Build the Electron application:

   ```bash
   cd chat-app/electron
   npm run package
   ```

3. Deploy the backend using Docker:
   ```bash
   cd chat-app/backend
   docker build -t chat-app-backend .
   docker run -p 5000:5000 chat-app-backend
   ```

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or support, please reach out to [your.email@example.com](mailto:your.email@example.com).
