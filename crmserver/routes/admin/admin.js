const auth = require("../../middleware/auth");
const sql = require('mssql')
const express = require("express"),
    jwt = require("jsonwebtoken"),
    multer = require("multer"),
    router = express.Router();


router.post("/admin", auth, async (req, res) => {
    jwt.verify(req.token, KEY_TOKEN, async (err, result) => {
        if (err) {
            return res.send({ msg: "error" });
        } else {
            return res.send({ message: "success" })
        }
    })
})



module.exports = router;