const nodemailer = require('nodemailer');
let formMail = ''
const transporter = nodemailer.createTransport({
    service: 'gmail',
    debug: true,
    secure: true,
    logger: true,
    tls: {

        rejectUnauthorized: true
    },
    auth: {
        user: `${formMail}`,
        pass: ''
    }
});

const sendMail = (toMail, subject, content) => {


    const mailOptions = {
        from: `${formMail}`,
        to: ``,
        subject: ``,
        //for text mail
        //text: 'That was easy!',
        // for html mail
        html: ``
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = { transporter, sendMail }