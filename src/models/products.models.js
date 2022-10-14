const { DataTypes } = require('sequelize');

const db = require('../utils/database');

const Products = db.define('products', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    categry: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    isAvailable: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        field: 'is_available',
        defaultValue: true
    }
})

module.exports = Products;