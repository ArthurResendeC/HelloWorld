const pg = require('pg')

const db = new pg.Client({ connectionString: "postgres://postgres:S3nh4tr0ll@localhost:5432/node_postgres" })

async function insertPokemon() {
    await db.connect();

    // Forma básica
    const query = `INSERT INTO "public"."Pokemon" (name, type) VALUES ('Sprigatito', 'Grama');`;
    const result1 = await db.query(query);
    console.log(result1);

    // Dados dinâmicos da forma ERRADA
    const name = "Fuecoco";
    const type = "Fogo";
    const result2 = await db.query(
        `INSERT INTO "Pokemon" (name, type) VALUES ('${name}', '${type}');`
    );
    console.log(result2);

    // Dados dinâmicos da forma CORRETA
    const pokemon = { name: "Quaxly", type: "Água" };
    const result3 = await db.query(
        `INSERT INTO "Pokemon" (name, type) VALUES ($1, $2);`,
        [pokemon.name, pokemon.type]
    );
    console.log(result3);

    await db.end();
}

insertPokemon();