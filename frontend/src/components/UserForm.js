import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser, loginUser } from '../redux/actions/userActions';

const UserForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [isLogin, setIsLogin] = useState(false);
    const dispatch = useDispatch();

    const handleChange = useCallback(({ target: { name, value } }) => {
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    }, []);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        dispatch(isLogin ? loginUser(formData) : registerUser(formData));
    }, [dispatch, formData, isLogin]);

    return (
        <div>
            <h2>{isLogin ? 'Login' : 'Register'}</h2>
            <form onSubmit={handleSubmit}>
                {['username', 'email', 'password'].map((field) => (
                    <input
                        key={field}
                        type={field === 'email' ? 'email' : field === 'password' ? 'password' : 'text'}
                        name={field}
                        placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                        value={formData[field]}
                        onChange={handleChange}
                        required
                    />
                ))}
                <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
            </form>
            <button onClick={() => setIsLogin((prev) => !prev)}>
                Switch to {isLogin ? 'Register' : 'Login'}
            </button>
        </div>
    );
};

export default UserForm;
