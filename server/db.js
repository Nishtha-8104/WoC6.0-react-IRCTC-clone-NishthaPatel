const Pool = require("pg").Pool;

require('dotenv').config();

const pool = new Pool({
    // user:'postgres',
    // password:'12345',
    // database:'IRCTC',
    // host:'localhost',
    // port:5432
    connectionString:process.env.DATABASE_URL,
    ssl:true
});

module.exports=pool;
