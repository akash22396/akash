const auth = require("../../middleware/auth");
const sql = require('mssql')
const express = require("express"),
    jwt = require("jsonwebtoken"),
    multer = require("multer"),
    router = express.Router();


router.post("/login", async (req, res) => {

    /*
     jwt.sign(
     { user_name: user_name, email:email },
     KEY_TOKEN,
     { expiresIn: "48h" },
     function (err, token) {
       if (err) {
         console.log(err);
         return res.send({ msg: "error" });
       } else {
         res.json({
           token: token,
           msg: "login successfully",
           userInfo: data[0],
         });
       }
     }
   );
     */
    return res.send({ message: "success" })
})

router.post("/loginVerify", auth, async (req, res) => {
    jwt.verify(req.token, KEY_TOKEN, async (err, result) => {
        if (err) {
            return res.send({ msg: "error" });
        } else {
            let { } = result
            return res.send({ message: "success" })

        }
    })
})


module.exports = router;