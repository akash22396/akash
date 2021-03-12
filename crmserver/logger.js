const fs = require('fs');
exports.errorLog = function (req, res) {
    fs.appendFileSync(`./logs/request-error-log-${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}.log`, `${req}\n`)
}

exports.requestLog = function (req) {
    fs.appendFileSync(`./logs/request-log-${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}.log`, `${req.ip}-${req.url}-${req.hostname} \nrequest-payload => ${JSON.stringify(req.body)}\n`)
}