const { Pool } = require('pg')

const pool = new Pool({connectionString: "postgres://postgres:S3nh4tr0ll@localhost:5432/node_postgres"})

async function query(queryString, params) {    
    const result = await pool.query(queryString, params)
    return result.rows
}

module.exports = { query }
