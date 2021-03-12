const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
    // console.log(req.headers)
    var bearerHeader =
        req.headers["authorization"] ||
        req.body.token ||
        req.body.headers["authorization"];
    // console.log(bearerHeader)
    if (typeof bearerHeader != "undefined") {
        var bearer = bearerHeader.split(" ");
        var bearerToken = bearer[1];
        req.token = bearerToken;
        let user_email = "";

        next();
    } else {
        res.send("err token");
    }
};
module.exports = auth;
