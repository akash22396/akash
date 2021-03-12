const auth = require("../../middleware/auth");
const sql = require('mssql')
const express = require("express"),
    jwt = require("jsonwebtoken"),
    multer = require("multer"),
    router = express.Router();


router.post("/signup", async (req, res) => {

    return res.send({ message: "success" })

})



module.exports = router;