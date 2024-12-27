const pg = require('pg')

const client = new pg.Client({ connectionString: "postgres://postgres:S3nh4tr0ll@localhost:5432/node_postgres" })

async function openConnection() {
    await client.connect()
    const result = await client.query(`SELECT 1+1 AS result`)
    console.log(result.rows)
    setTimeout(() => {
        client.end()
        console.log("Conexão encerrada...")
    }, 5000)
}

openConnection();
