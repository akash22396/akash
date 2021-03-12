const { mysqlConn, mssqlConnPool } = require('./config/database');

const express = require('express'),
    cors = require('cors'),
    chalk = require('chalk'),
    yargs = require('yargs'),
    helmet = require('helmet'),
    fs = require('fs'),
    xssFilter = require("x-xss-protection"),
    xss = require("xss"),
    port = process.env.PORT || 9000,
    host = process.env.HOST || '127.0.0.1';

const app = express();
const sql = require('mssql')


/******************* Import Routes *******************/
const login = require('./routes/registeration/login'),
    signup = require('./routes/registeration/signup');

const validation = require('./routes/utils/validation');
const user = require('./routes/client/user');
const admin = require('./routes/admin/admin');
const { requestLog, errorLog } = require('./logger');
/**************************  Middleware *******************************/
app.use(cors())
app.use(helmet())
app.use(xssFilter());
// app.use();
app.use(express.json({ limit: "50mb" }))
app.use(express.urlencoded({
    extended: true,
    limit: '50mb'
}))

/*************************  For Request Log  ********************************/
app.use((req, res, next) => {
    requestLog(req)
    next()
})

/***************************   ******************************/

app.get('/', (req, res) => {
    res.send({ message: "Welcome to REST API" })
})

app.get('/mysql', async (req, res) => {
    const sqlQ = `select * from admin1`;
    await mysqlConn.query(sqlQ, [], (err, result) => {
        if (err) {
            errorLog(err)
            // console.log(err)
            return res.send({ message: 'error' })
        } else {
            return res.send(result)
        }
    })
})
app.get('/mssql', (req, res) => {

    const sqlQ = `select * from login`;
    const request = new sql.Request(mssqlConnPool)
    // request.input('', sql.VarChar,)
    request.query(sqlQ, (err, result) => {
        if (err) {
            console.log(err)
            return res.send({ message: 'error' })
        } else {
            return res.send(result.recordset)
        }
    })
})




/****************************  Routes  *****************************/
app.use('/api/login', login)
app.use('/api/signup', signup)


app.use('/api/validation', validation)


app.use('/api/user', user)

app.use('/api/admin', admin)


/****************************  Server Config  *****************************/
app.listen(port, () => {
    console.log(chalk.green.inverse.bold(`Server running on http://${host}:${port}`))
})


