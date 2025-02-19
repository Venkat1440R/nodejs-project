import axios from 'axios';
import { toast } from 'react-toastify';

export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

const handleRequest = async (dispatch, actionType, request, successMessage, errorMessage) => {
    try {
        const response = await request();
        dispatch({ type: actionType, payload: response.data });
        toast.success(successMessage);
    } catch (error) {
        toast.error(error.response?.data?.message || errorMessage);
    }
};

export const registerUser = (userData) => async (dispatch) => {
    await handleRequest(
        dispatch,
        REGISTER_USER,
        () => axios.post('/api/users/register', userData),
        'Registration successful!',
        'Registration failed'
    );
};

export const loginUser = (credentials) => async (dispatch) => {
    await handleRequest(
        dispatch,
        LOGIN_USER,
        () => axios.post('/api/users/login', credentials),
        'Login successful!',
        'Login failed'
    );
};

export const logoutUser = () => {
    return { type: LOGOUT_USER };
};