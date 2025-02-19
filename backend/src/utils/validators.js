const { body, validationResult } = require('express-validator');

const validateField = (field, validations) => {
    return body(field).bail().custom((value, { req }) => {
        for (const validation of validations) {
            const result = validation(value, req);
            if (result !== true) {
                throw new Error(result);
            }
        }
        return true;
    });
};

const validateRegistration = [
    validateField('username', [
        value => value ? true : 'Username is required',
        value => value.length >= 3 ? true : 'Username must be at least 3 characters long'
    ]),
    validateField('email', [
        value => value ? true : 'Email is required',
        value => /\S+@\S+\.\S+/.test(value) ? true : 'Invalid email format'
    ]),
    validateField('password', [
        value => value ? true : 'Password is required',
        value => value.length >= 6 ? true : 'Password must be at least 6 characters long'
    ]),
];

const validateLogin = [
    validateField('email', [
        value => value ? true : 'Email is required',
        value => /\S+@\S+\.\S+/.test(value) ? true : 'Invalid email format'
    ]),
    validateField('password', [
        value => value ? true : 'Password is required'
    ]),
];

const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

module.exports = {
    validateRegistration,
    validateLogin,
    handleValidationErrors,
};