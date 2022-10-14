const express = require('express');
const initModels = require('./models/initModels');
const config = require('./config');
const db = require('./utils/database');
const productsRouter = require('./products/products.router');


const app = express();

app.use(express.json())


db.authenticate()
    .then(() => console.log('db OK!'))
    .catch(err => console.log(err));

db.sync()
    .then(() => console.log('db sync OK!'))
    .catch(err => console.log(err));

initModels();

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Hello World'
    })
})

app.use('/products', productsRouter);



app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`)
})