const { query } = require(".");

async function syncDatabase() {
    await query(`
        DROP TABLE IF EXISTS order_products CASCADE;
        DROP TABLE IF EXISTS products CASCADE;
        CREATE TABLE IF NOT EXISTS products (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            description TEXT,
            price DECIMAL(10, 2) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            stock_quantity INTEGER NOT NULL,    
            is_active BOOLEAN DEFAULT TRUE
        );
    `)
    console.log('Tabela de produtos sincronizada')

    await query(`
        DROP TABLE IF EXISTS costumers CASCADE;
        CREATE TABLE IF NOT EXISTS customers (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `)
    console.log('Tabela de clientes sincronizada')

    await query(`
        DROP TABLE IF EXISTS orders CASCADE;
        CREATE TABLE IF NOT EXISTS orders (
            id SERIAL PRIMARY KEY,
            customer_id INTEGER NOT NULL,
            total DECIMAL(10, 2) NOT NULL DEFAULT 0, 
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (customer_id) REFERENCES customers(id)  
        );
    `)
    console.log('Tabela de pedidos sincronizada')

    await query(`
        CREATE TABLE IF NOT EXISTS order_products (
            id SERIAL PRIMARY KEY,
            order_id INTEGER NOT NULL,
            product_id INTEGER NOT NULL,
            quantity INTEGER NOT NULL DEFAULT 1,
            FOREIGN KEY (order_id) REFERENCES orders(id),
            FOREIGN KEY (product_id) REFERENCES products(id) 
        );
    `)
    console.log('Tabela de produtos dos pedidos sincronizada')  

    process.exit(1);
}

syncDatabase()