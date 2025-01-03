const { Client } = require("pg")
const { query, getClient } = require("../database")
const Product = require("./Product")
const Customer = require("./Customers")

class Order {
    constructor(order_row, populate_costumer, populate_products) {
        this.id = order_row.id
        this.customer_id = order_row.customer_id
        this.total = +order_row.total
        this.created_at = new Date(order_row.created_at)
        this.updated_at = new Date(order_row.updated_at)

        this.costumer = undefined
        if (populate_costumer) this.costumer = populate_costumer

        this.products = undefined
        if (populate_products) this.products = populate_products

    }

    static async findAll() {
        const orders = await query(`
            SELECT 
                orders.*, 
                customers.id as "customer.id", 
                customers.name as "customer.name", 
                customers.email as "customer.email" ,
                customers.created_at as "customer.created_at",
                customers.updated_at as "customer.updated_at"
            FROM orders
            JOIN customers ON orders.customer_id = customers.id;
        `)
        if (!orders || orders.length === 0) return []
        return orders.map(order => new Order(order))
    }

    /**
      @param {number} customer_id
      @param {{id:number, quantity: number}[]} orderProducts
    */
    static async create(customer_id, orderProducts) {
        const dbClient = await getClient()
        let response

        try {
            const storedOrderProducts = await query(
                `SELECT * FROM products WHERE id = ANY($1::int[]);`,
                [orderProducts.map(({ productId }) => productId)]
            )
            console.log(storedOrderProducts)

            if (!storedOrderProducts || storedOrderProducts.length === 0) {
                return { error: 'Nenhum produto encontrado com os IDs fornecidos' }
            }

            let orderTotal = 0
            const populatedOrderProducts = storedOrderProducts.map(row => {
                const { quantity } = orderProducts.find(product => product.productId === +row.id)
                orderTotal += +row.price * quantity
                return {
                    product: new Product(row),
                    quantity: quantity
                }
            })

            await dbClient.query('BEGIN')
            const orderCreationResult = await dbClient.query(`
                INSERT INTO orders (customer_id, total) VALUES ($1, $2) RETURNING *;`,
                [customer_id, orderTotal]
            )

            const order = new Order(orderCreationResult.rows[0], null, populatedOrderProducts)

            for (const entry of populatedOrderProducts) {
                await dbClient.query(`
                    INSERT INTO order_products (order_id, product_id, quantity) VALUES ($1, $2, $3);
                `, [order.id, entry.product.id, entry.quantity])
            }

            await dbClient.query('COMMIT')
            response = order
        } catch (error) {
            await dbClient.query('ROLLBACK')
            response = { error: error.message }
            console.log(error)
        } finally {
            dbClient.end()
        }

        return response
    }

    static async findById(id) {
        const orderResult = await query(
            `SELECT
              orders.*,
              customers.id AS "customer.id",
              customers.name AS "customer.name",
              customers.email AS "customer.email",
              customers.created_at AS "customer.created_at",
              customers.updated_at AS "customer.updated_at"
            FROM orders JOIN customers ON customers.id = orders.customer_id
            WHERE orders.id = $1;`,
            [id]
        )
        const orderProductsResult = await query(
            `SELECT order_products.*, products.*
            FROM order_products JOIN products ON order_products.product_id = products.id
            WHERE order_products.order_id = $1;`,
            [id]
        )
        
        const customer = new Customer({
            id: orderResult[0]["customer.id"],
            name: orderResult[0]["customer.name"],
            email: orderResult[0]["customer.email"],
            created_at: orderResult[0]["customer.created_at"],
            updated_at: orderResult[0]["customer.updated_at"]
        })    

        const orderResultData = {
            id: +orderResult[0].id,
            customer_id: +orderResult[0].customer_id,
            total: +orderResult[0].total,
            created_at: new Date(orderResult[0].created_at),
            updated_at: new Date(orderResult[0].updated_at)
        }
        
        return new Order(orderResultData, customer, orderProductsResult[0])
    }

    static async delete(id) {
        const dbClient = await getClient()
        let result
        try {
            await dbClient.query("BEGIN")
            await dbClient.query(`DELETE FROM order_products WHERE order_id = $1;`, [+id])
            await dbClient.query(`DELETE FROM orders WHERE id = $1`, [+id])
            await dbClient.query("COMMIT")
            result = { message: "Order deleted successfully" }
        } catch (error) {
            await dbClient.query("ROLLBACK")
            result = { message: "Error while deleting order" }
        } finally {
            dbClient.release()
        }
        return result
    }
}

module.exports = Order