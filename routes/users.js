/**
 * Import node modules to use as a middleware
 */
const express = require('express');
const Router = express.Router();

/** 
 * GET Requests starts here 
 * 
 */
/**
 * Profile router
 */
Router.get('/profile', (req, res, next) => {
    res.send('Profile');
});
/** GET requests ends here */

/** 
 * POST requests starts here 
 */
/**
 * Registration router
 */
Router.post('/register', (req, res, next) => {
    res.send('Register');
});

/**
 * Authenticate router GET request
 */
Router.post('/authenticate', (req, res, next) => {
    res.send('Authenticate');
});
/** POST requests ends here */

module.exports = Router;