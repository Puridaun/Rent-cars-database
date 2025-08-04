const Pool = require('pg').Pool; //let's see

const pool = new Pool({

    connectionString: process.env.DATABASE_URL,


    user: process.env.DATABASE_URL ? undefined : process.env.DB_USER,
    host: process.env.DATABASE_URL ? undefined : process.env.DB_HOST,
    password: process.env.DATABASE_URL ? undefined : process.env.DB_PASS,
    port: process.env.DATABASE_URL ? undefined : process.env.DB_PORT,
    database: process.env.DATABASE_URL ? undefined : process.env.DB_NAME,


    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

module.exports = pool;