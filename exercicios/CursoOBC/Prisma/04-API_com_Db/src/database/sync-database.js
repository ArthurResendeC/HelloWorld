const { query } = require(".");

async function syncDatabase() {
    await query(`
        DROP TABLE IF EXISTS products;
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
    console.log('Database synced')
    process.exit(1);
}

syncDatabase()