const pg = require('pg')

const db = new pg.Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "S3nh4tr0ll",
    database: "node_postgres"
})

async function createTable() {
    await db.connect();
    const result = await db.query(`
            CREATE TABLE IF NOT EXISTS "public"."Pokemon" (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                type VARCHAR(255) 
            );
        `);

    console.log(result);

    await db.end()
}

createTable()