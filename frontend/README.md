# Frontend Documentation

## Project Overview
This frontend application is built using React and Redux for state management. It interacts with a Node.js backend to handle user registration and login functionalities.

## Setup Instructions
1. **Clone the Repository**
   ```
   git clone <repository-url>
   cd nodejs-project/frontend
   ```

2. **Install Dependencies**
   ```
   npm install
   ```

3. **Run the Application**
   ```
   npm start
   ```
   The application will run on `http://localhost:3000`.

## Components
- **UserForm**: A functional component that manages user input for registration and login. It utilizes custom hooks for form state management and validation.

## Hooks
- **useCustomHook**: A custom hook that encapsulates logic for managing form state and validation, making it reusable across components.

## Redux Store
- **Actions**: Defined in `redux/actions/userActions.js`, these are functions that dispatch actions related to user registration and login.
- **Reducers**: The user state is managed in `redux/reducers/userReducer.js`, which handles actions dispatched from the user actions.
- **Store**: The Redux store is configured in `redux/store.js`, combining reducers and applying middleware.

## Additional Information
For more details on the backend, refer to the backend README located in the `backend` directory.