# Node.js Project Backend

## Overview
This backend project is built using Node.js and Express, integrated with MongoDB for data storage. It provides user authentication features, including registration and login, utilizing JWT for secure token management. The project also employs various packages such as bcrypt for password hashing and validator for input validation.

## Technologies Used
- Node.js
- Express
- MongoDB
- Mongoose
- Bcrypt
- JSON Web Token (JWT)
- Validator

## Project Structure
```
backend
├── src
│   ├── app.js                # Entry point of the application
│   ├── controllers           # Contains user-related logic
│   │   └── userController.js
│   ├── models                # Mongoose models
│   │   └── userModel.js
│   ├── routes                # API routes
│   │   └── userRoutes.js
│   ├── middlewares           # Middleware functions
│   │   └── authMiddleware.js
│   └── utils                 # Utility functions
│       └── validators.js
├── package.json              # Project dependencies and scripts
└── README.md                 # Project documentation
```

## Setup Instructions
1. **Clone the repository**
   ```
   git clone <repository-url>
   cd nodejs-project/backend
   ```

2. **Install dependencies**
   ```
   npm install
   ```

3. **Set up MongoDB**
   Ensure you have a MongoDB instance running. You can use MongoDB Atlas or a local installation.

4. **Environment Variables**
   Create a `.env` file in the `backend` directory and add your MongoDB connection string and JWT secret:
   ```
   MONGODB_URI=<your-mongodb-uri>
   JWT_SECRET=<your-jwt-secret>
   ```

5. **Run the application**
   ```
   npm start
   ```

## API Endpoints
- **POST /api/register**: Register a new user
- **POST /api/login**: Log in an existing user
- **GET /api/protected**: Access a protected route (requires authentication)

## License
This project is licensed under the MIT License.