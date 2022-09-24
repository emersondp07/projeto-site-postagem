// Importa a classe Client da biblioteca PG
const { Client } = require('pg');

const client = new Client( 
    {
        connectionString: process.env.DATABASE_URL || 'postgres://imdclskttotfib:5a00dfd2b6dd283db6396ded91fd73296527ab380ad5e76c75feac73773d228d@ec2-44-207-253-50.compute-1.amazonaws.com:5432/ddn9oa6255hrse',
        ssl: {
            rejectUnauthorized: false
        }
    } 
)

client.connect()

module.exports = client;