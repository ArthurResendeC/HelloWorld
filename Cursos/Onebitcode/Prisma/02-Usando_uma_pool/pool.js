const { Pool } = require('pg')
const pool = new Pool({ connectionString: "postgres://postgres:S3nh4tr0ll@localhost:5432/node_postgres", max: 2 })

async function openConnection() {
    const cliente = await pool.connect()
    const result = await cliente.query(`SELECT 1+1 AS soma`)
    console.log(result.rows)
    setTimeout(() => {
        cliente.release()
        console.log("Conexão encerrada...")
    }, 5000)    
}

openConnection()
openConnection()
openConnection()
