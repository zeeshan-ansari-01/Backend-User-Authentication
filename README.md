# Backend Authentication

A small backend authentication project built using Node.js, Express.js, MongoDB, and JWT (JSON Web Token).

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- Cookie Parser
- dotenv

## Features

- Connect to MongoDB using Mongoose.
- Register a new user.
- Check whether a user already exists using their email.
- Generate a JWT token after successful registration.
- Store the JWT token in a cookie.
- Verify the JWT token before accessing the post creation route.
- Return an unauthorized response when the token is missing or invalid.

## API Endpoints

| Method | Endpoint             | Description                                              |
| ------ | -------------------- | -------------------------------------------------------- |
| POST   | `/api/auth/register` | Register a new user                                      |
| POST   | `/api/posts/create`  | Verify authentication and access the post creation route |

## Project Structure

project/
├── src/
│   ├── app.js
│   ├── controllers/
│   │   └── auth.controller.js
│   ├── db/
│   │   └── db.js
│   ├── models/
│   │   └── user.model.js
│   └── routes/
│       ├── auth.routes.js
│       └── post.routes.js
├── .env
├── .gitignore
└── server.js

## Environment Variables

Create a `.env` file in the project root and configure the following variables:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

Replace the placeholder values with your actual configuration.

**Important:** Do not upload your `.env` file or expose your secrets publicly.

## Installation

### 1. Clone the repository

git clone <your-repository-url>

### 2. Navigate to the project directory

cd <project-folder>

### 3. Install dependencies

npm install

### 4. Configure environment variables

Create the `.env` file and add your MongoDB connection string and JWT secret.

### 5. Start the server

node server.js

The server runs on port `3000`.

## API Usage

### 1. Register a User

**Endpoint:**

POST /api/auth/register

**Request Body:**

{
  "username": "your_username",
  "email": "your_email@example.com",
  "password": "your_password"
}

**Success Response:** `201 Created`

{
  "message": "User Registered Successfully"
}

A JWT token is set in the response cookie.

If a user with the same email already exists, the endpoint returns `409 Conflict`.

### 2. Access the Post Creation Route

**Endpoint:**

POST /api/posts/create

This route checks for the JWT token in the request cookies and verifies it using the configured JWT secret.

- If the token is missing, it returns `401 Unauthorized`.
- If token verification fails, it returns `401 Unauthorized`.
- Otherwise, it returns a success message.

**Success Response:**

Post Created Successfully

Note: The current route returns a success message; it does not save a post to MongoDB.

## License

This project is for learning and practice purposes.