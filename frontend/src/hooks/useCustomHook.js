import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser, loginUser } from '../redux/actions/userActions';

const useCustomHook = () => {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    }, []);

    const validateForm = useCallback(() => {
        const newErrors = {};
        if (!formData.username) newErrors.username = 'Username is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.password) newErrors.password = 'Password is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }, [formData]);

    const handleSubmit = useCallback((e, isLogin) => {
        e.preventDefault();
        if (validateForm()) {
            if (isLogin) {
                dispatch(loginUser(formData));
            } else {
                dispatch(registerUser(formData));
            }
        }
    }, [dispatch, formData, validateForm]);

    return {
        formData,
        errors,
        handleChange,
        handleSubmit,
    };
};

export default useCustomHook;