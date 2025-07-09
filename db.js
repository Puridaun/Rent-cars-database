const Pool = require('pg').Pool; //let's see

const pool = new Pool({
    // Use Railway DATABASE_URL in production, individual env vars in development
    connectionString: process.env.DATABASE_URL,

    // Fallback to individual env vars for local development
    user: process.env.DATABASE_URL ? undefined : process.env.DB_USER,
    host: process.env.DATABASE_URL ? undefined : process.env.DB_HOST,
    password: process.env.DATABASE_URL ? undefined : process.env.DB_PASS,
    port: process.env.DATABASE_URL ? undefined : process.env.DB_PORT,
    database: process.env.DATABASE_URL ? undefined : process.env.DB_NAME,

    // SSL for production (Railway requires this)
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

module.exports = pool;