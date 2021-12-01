/**
 * An axios const
 * @type {express}
 */
const axios = require("axios");
/**
 * An redis const
 * @type {express}
 */
const redis = require("redis");
/**
 * An port redis
 * @type {express}
 */
const redisPort = 6379
/**
 * An client const to assigned the redis client
 * @type {express}
 */
const client = redis.createClient(redisPort);

/**
 * This function do render to index page
 * @param {req} n1 - A request data
 * @param {res} n2 - A response data
 */
exports.getLogin = async function (req, res, next) {
    console.log(`service getLogin`)
    return res.render('index', { error: false });
}

/**
 * This function is used to function validateLogin and do validation to access application 
 * @param {user} n1 - User
 * @param {password} n2 - password was inserted 
 * @returns {boolean} Returns true if the credentials are correct
 */
var login =function(user,password){
    console.log(user,password)
        if(user==="testaffiliateexternal" && password==="testaffiliateexternal"){
            console.log("if")
            return true;
        }
        else{
            console.log("else")
            return false;
        }
    }
/**
 * This function redirect the respect view in case the credential are correct or incorrect
 * @param {req} n1 - A request data
 * @param {res} n2 - A response data
 * @returns {number} Operation result
 */
exports.validateLogin= function (req, res, next) {
    console.log(req.query.username)
    const username = req.query.username;
    const pass = req.query.password;
    
        let loginResult = login(username, pass);
    if (loginResult) {
         res.render('user', {username: username});
        }
        else {
            res.render('index', {error: true});
        }
    };
/**
 * This function is the middleware to getData function and validate if data is located in memory 
 * and redirect to the view page and send the parameters to the view
 * @param {req} n1 - A request data
 * @param {res} n2 - A response data
 * @returns {render} Operation result render to view page with data parameters
 */  
const middleware = async (req, res, next) => {
    console.log(`middleware`)
    try {
        client.get(`testParam`, async (_, redisData) => {

        if (redisData.length === 0) {
            console.log(`redisData.length === 0`)
            next()
            return
        }
        console.log(`Desde Sesion`)
        res.render('registration', { registerData: redisData});
    });
    } catch (error) {
        console.error(error.message)
        res.status(500).send('Server Error')
    }
}
/**
 * This function consume a service API to get the registration JSON field in case the Data is not located in REGIS memory
 * @param {req} n1 - A request data
 * @param {res} n2 - A response data
 * @returns {render} Operation result render to view page with data parameters
 */
exports.getData=middleware,async function (req, res, next) {
    const register =await axios.post(`https://platon.cf-it.at/affiliate/getRegistrationFields?login=testaffiliateexternal&pass=testaffiliateexternal`);
    client.set(`testParam`, JSON.stringify(register.data));
    console.log(`Desde Servicio`)
    res.render('registration', {registerData: JSON.stringify(register.data)});
  };





