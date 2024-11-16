const { query } = require("../database")

class Costumer {
    constructor(costumerRow) {
        this.id = costumerRow.id
        this.name = costumerRow.name
        this.email = costumerRow.email
        this.createdAt = costumerRow.created_at
        this.updatedAt = costumerRow.updated_at 
    }

    static async findAll() {
        const result = await query('SELECT * FROM costumers')
        return result.map(costumerRow => new Costumer(costumerRow))
    }

    static async create({ name, email }) {
        const result = await query('INSERT INTO costumers (name, email) VALUES ($1, $2) RETURNING *', [name, email])
        return new Costumer(result[0])
    }   

    static async findById(id) {
        const result = await query('SELECT * FROM costumers WHERE id = $1', [id])
        if (!result[0]) return null
        return new Costumer(result[0])
    }

    static async update(id, attributes) {
        const result= await query(`SELECT * FROM costumers WHERE id = $1`, [id])
        if (!result[0]) return null
        const costumer = new Costumer(result[0])
        Object.assign(costumer, attributes)
        costumer.updatedAt = new Date()
        await query(
            `UPDATE costumers SET 
                name = $1, 
                email = $2, 
                updated_at = current_timestamp
            WHERE id = $3`,
            [costumer.name, costumer.email, id])
        return costumer
    }  
    
    static async delete(id) {
        await query('DELETE FROM costumers WHERE id = $1', [id])
        return {message: "Cliente deletado com sucesso ou não encontrado"}
    }   
}

module.exports = Costumer