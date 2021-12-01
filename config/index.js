/**
 * Required External Modules
 */
/**
 * An express const
 * @type {express}
 */
const express = require("express");
/**
 * An path const
 * @type {express}
 */
const path = require("path");
/**
 * Assigned const express to app const
 * @type {express}
 */
const app = express();
/**
 * An port const
 * @type {express}
 */
const port = process.env.PORT || "8000";

/**
 * App Variables
 */
var service = require('../services/service')
var bodyParser = require('body-parser');
/**
 *  App Configuration
 *
 *Configure PUG as Template engine */

app.set("views", path.join(__dirname, "./../views"));
app.set("view engine", "pug");// tells express what template engine use (pug)

/**
 * Routes Definitions
 *
/* GET home page. */
/**
* @method
* @desc method to receive the petition and invoque the getLogin function in services
* @since 0.0.1
* @version 1.0.0
* @todo this method will redirect to web page
*/
   app.get('/', service.getLogin)

/* Login user */
   app.get('/login', service.validateLogin)
  
/* Get Form Register user */
   app.get('/registration', service.getData);//service.validateData)

/**
 * Server Activation
 */
module.exports = app;

app.listen(process.env.PORT || 3000, () => {
  console.log("Node server started");
});

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});

