const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const validator = require('validator');

class UserController {
    constructor(UserModel) {
        this.UserModel = UserModel;
    }

    async registerUser(req, res) {
        const { username, email, password } = req.body;

        // Validate input
        const errors = this.validateRegistrationInput(username, email, password);
        if (errors.length > 0) {
            return res.status(400).json({ errors });
        }

        try {
            // Check if user already exists
            const existingUser = await this.UserModel.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: 'User already exists' });
            }

            // Hash password and create new user
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = new this.UserModel({ username, email, password: hashedPassword });

            await newUser.save();
            res.status(201).json({ message: 'User registered successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Server error', error });
        }
    }

    async loginUser(req, res) {
        const { email, password } = req.body;

        // Validate input
        const errors = this.validateLoginInput(email, password);
        if (errors.length > 0) {
            return res.status(400).json({ errors });
        }

        try {
            // Find user and check password
            const user = await this.UserModel.findOne({ email });
            if (!user || !(await bcrypt.compare(password, user.password))) {
                return res.status(400).json({ message: 'Invalid credentials' });
            }

            // Generate token
            const token = this.generateToken(user._id);
            res.json({ token });
        } catch (error) {
            res.status(500).json({ message: 'Server error', error });
        }
    }

    validateRegistrationInput(username, email, password) {
        const errors = [];
        if (!username || !email || !password) {
            errors.push('All fields are required');
        }
        if (!validator.isEmail(email)) {
            errors.push('Invalid email format');
        }
        if (password.length < 6) {
            errors.push('Password must be at least 6 characters long');
        }
        return errors;
    }

    validateLoginInput(email, password) {
        const errors = [];
        if (!email || !password) {
            errors.push('All fields are required');
        }
        return errors;
    }

    generateToken(userId) {
        return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
    }
}

module.exports = UserController;
