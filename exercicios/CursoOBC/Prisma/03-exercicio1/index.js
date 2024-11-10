const pg = require('pg')
const db = new pg.Client({ connectionString: "postgres://postgres:S3nh4tr0ll@localhost:5432/exercicio_pg" })

async function createTable() {
    await db.query(`
        CREATE TABLE IF NOT EXISTS Eventos 
            (id SERIAL PRIMARY KEY, 
            name VARCHAR(255), 
            date TIMESTAMP, 
            total_tickets INT, 
            sold_tickets INT)`
    )
    console.log("Tabela Eventos criada com sucesso!")
}

async function insertEvent(name, date, total_tickets, sold_tickets) {
    if (total_tickets > 0) {
        await db.query(`INSERT INTO Eventos (name, date, total_tickets, sold_tickets)
         VALUES ($1, $2, $3, $4)`, [name, date, total_tickets, sold_tickets])
        console.log(`Evento ${name} inserido com sucesso!`)
    } else {
        throw new Error("O número de ingressos não pode ser menor ou igual a 0")
    }
}


async function getEvents() {
    const result = await db.query(`SELECT * FROM Eventos`)
    console.log(result.rows)
}


async function getEventByName(name) {
    const result = await db.query(`SELECT * FROM Eventos WHERE name = $1`, [name])
    console.log(result.rows)
}


async function getEventByDate(date) {
    const result = await db.query(`SELECT * FROM Eventos WHERE date = $1`, [date])
    console.log(result.rows)
}


async function updateEvent(name) {

    // Verifica se o evento existe e pega suas informações
    const event = await db.query(`SELECT * FROM Eventos WHERE name = $1`, [name])

    if (event.rows.length === 0) {
        console.log("Evento não encontrado")
        return
    }

    const currentEvent = event.rows[0]
    const currentDate = new Date()
    const eventDate = new Date(currentEvent.date)

    // Verifica se o evento já aconteceu
    if (eventDate < currentDate) {
        console.log("Este evento já aconteceu")
        return
    }

    // Verifica se ainda há ingressos disponíveis
    if (currentEvent.sold_tickets >= currentEvent.total_tickets) {
        console.log("Não há mais ingressos disponíveis")
        return
    }

    // Incrementa em 1 o número de ingressos vendidos
    await db.query(
        `UPDATE Eventos SET sold_tickets = sold_tickets + 1 WHERE name = $1 RETURNING *`,
        [name]
    )

    console.log(`Ingresso vendido com sucesso para o evento ${name}`)
    console.log(`Ingressos restantes: ${currentEvent.total_tickets - (currentEvent.sold_tickets + 1)}`)
}


async function runAllFunctions() {
    try {
        await db.connect()

        await createTable()
        await insertEvent("Evento 1", "2024-01-01", 100, 0)
        await insertEvent("Evento 2", "2024-12-02", 100, 0)
        await getEvents()
        await getEventByName("Evento 1")
        await getEventByDate("2024-12-02")
        await updateEvent("Evento 2")
        await getEvents()
    } catch (error) {
        console.error('Erro:', error)
    } finally {
        await db.end()
    }
}

runAllFunctions()

