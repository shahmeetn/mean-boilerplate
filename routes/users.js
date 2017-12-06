/**
 * Import node modules to use as a middleware
 */
const express = require('express');
const Router = express.Router();

/**
 * Registration router GET request
 */
Router.get('/register', (req, res, next) => {
    res.send('Register');
});

/**
 * Authenticate router GET request
 */
Router.get('/authenticate', (req, res, next) => {
    res.send('Authenticate');
});

/**
 * Profile router GET request
 */
Router.get('/profile', (req, res, next) => {
    res.send('Profile');
});

/**
 * Validate router GET request
 */
Router.get('/validate', (req, res, next) => {
    res.send('Validate');
});

module.exports = Router;