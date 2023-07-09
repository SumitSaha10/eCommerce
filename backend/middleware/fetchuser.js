const jwt = require("jsonwebtoken");
const JWT_SECRET = "Mywebtoken@";

const fetchuser = (req, res, next) => {
    //Get the user from the jwt token and add id to the req object
    const token = req.header("auth-token");
    if (!token) {
        res.status(404).send({ error });
    }
    try {

        const data = jwt.verify(token, JWT_SECRET);
        req.id = data.user._id;
        next();
    } catch (error) {
        res.status(404).send({ error });
    }

}

module.exports = fetchuser;