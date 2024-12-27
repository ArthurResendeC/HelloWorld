const { Pool } = require('pg')
const pool = new Pool({ connectionString: "postgres://postgres:S3nh4tr0ll@localhost:5432/node_postgres" })

async function quickQuery() {
    const result = await pool.query(`SELECT 1+1 AS soma`)
    console.log(result.rows[0])

    setTimeout(() => {
        console.log("Encerrando conexão...")
    }, 5000);
}

quickQuery()
quickQuery()
quickQuery()
