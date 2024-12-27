const { query } = require("../database")

class Customer  {
    constructor(customerRow) {
        this.id = customerRow.id
        this.name = customerRow.name
        this.email = customerRow.email
        this.createdAt = customerRow.created_at
        this.updatedAt = customerRow.updated_at 
    }

    static async findAll() {
        const result = await query('SELECT * FROM customers')
        return result.map(customerRow => new Customer(customerRow))
    }

    static async create({ name, email }) {
        const result = await query('INSERT INTO customers (name, email) VALUES ($1, $2) RETURNING *', [name, email])
        return new Customer(result[0])
    }   

    static async findById(id) {
        const result = await query('SELECT * FROM customers WHERE id = $1', [id])
        if (!result[0]) return null
        return new Customer(result[0])
    }

    static async update(id, attributes) {
        const result= await query(`SELECT * FROM customers WHERE id = $1`, [id])
        if (!result[0]) return null
        const customer = new Customer(result[0])
        Object.assign(customer, attributes)
        customer.updatedAt = new Date()
        await query(
            `UPDATE customers SET 
                name = $1, 
                email = $2, 
                updated_at = current_timestamp
            WHERE id = $3`,
            [customer.name, customer.email, id])
        return customer
    }  
    
    static async delete(id) {
        await query('DELETE FROM customers WHERE id = $1', [id])
        return {message: "Cliente deletado com sucesso ou não encontrado"}
    }   
}

module.exports = Customer