# Node.js Project

This project is a full-stack application built with Node.js, Express, MongoDB, and React. It demonstrates user registration and login functionality with validation, password hashing, and state management using Redux.

## Project Structure

```
nodejs-project
├── backend
│   ├── src
│   │   ├── app.js
│   │   ├── controllers
│   │   │   └── userController.js
│   │   ├── models
│   │   │   └── userModel.js
│   │   ├── routes
│   │   │   └── userRoutes.js
│   │   ├── middlewares
│   │   │   └── authMiddleware.js
│   │   └── utils
│   │       └── validators.js
│   ├── package.json
│   └── README.md
├── frontend
│   ├── src
│   │   ├── components
│   │   │   └── UserForm.js
│   │   ├── hooks
│   │   │   └── useCustomHook.js
│   │   ├── redux
│   │   │   ├── actions
│   │   │   │   └── userActions.js
│   │   │   ├── reducers
│   │   │   │   └── userReducer.js
│   │   │   └── store.js
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── README.md
├── .gitignore
└── README.md
```

## Backend Setup

1. Navigate to the `backend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the server:
   ```
   npm start
   ```

## Frontend Setup

1. Navigate to the `frontend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the React application:
   ```
   npm start
   ```

## API Endpoints

- **POST /api/register**: Register a new user.
- **POST /api/login**: Log in an existing user.

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose
- Bcrypt
- JSON Web Token
- Validator
- React
- Redux

## License

This project is licensed under the MIT License.