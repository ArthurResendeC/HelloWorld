const { Pool } = require('pg')

const pool = new Pool({connectionString: "postgres://postgres:S3nh4tr0ll@localhost:5432/node_postgres"})

async function query(queryString, params, callback) {    
    const result = await pool.query(queryString, params, callback)
    return result.rows
}

async function getClient(){
    return pool.connect()
}

module.exports = { query, getClient }
