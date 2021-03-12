const mysql = require("mysql");
const sql = require("mssql");
/*********************  MySql Connection  *********************/


exports.mysqlConn = mysql.createConnection({
    user: "",
    password: "",
    database: '',
    host: "127.0.0.1",
    port: 3306
})


/*********************  MSSQL Connection  *********************/

const config = {
    user: "",
    password: "",
    server: "127.0.0.1", // You can use 'localhost\\instance' to connect to named instance
    database: "",
    port: 1433,
    options: {
        encrypt: false,
        enableArithAbort: true
    },
};

const pool = new sql.ConnectionPool(config)
exports.mssqlConn = pool.connect()
exports.mssqlConnPool = pool

/*
For Single Database
const config = {
  user: "",
  password: "",
  server: "127.0.0.1", // You can use 'localhost\\instance' to connect to named instance
  database: "",
  port: 1433,
  options: {
    encrypt: false,
    enableArithAbort: true
  },
};

exports.config = config;
exports.conn = sql.connect(config);
*/