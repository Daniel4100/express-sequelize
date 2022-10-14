require('dotenv').config()

const config = {
    port: process.env.PORT || 9000,
    nodeEnv: process.env.NODE_ENV ,
    db: {
        host: process.env.DB_HOST || 'localhost',
        username: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASSWORD || 'root' ,
        name: process.env.DB_NAME || 'products_crud',
        port: process.env.DB_PORT || 5432,
    }

}

module.exports = config