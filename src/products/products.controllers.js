const uuid = require("uuid");
const Products = require("../models/products.models");

const getAllProducts = async () => {
    const products = await Products.findAll();
    return products;
}

const getProductById = async (id) => {
    const product = await Products.findOne({
        where: {
            id
        }
    });
    return product;
}

const createProduct = async (product) => {
    const newProduct = await Products.create({
        id: uuid.v4(),
        name: product.name,
        categry: product.categry,
        price: product.price,
        isAvailable: product.isAvailable,
    });
    return newProduct;
}

const updateProduct = async (id, product) => {
    const updatedProduct = await Products.update(product, {
        where: {
            id
        }
    });
    return updatedProduct;
}

const deleteProduct = async (id) => {
    const deletedProduct = await Products.destroy({
        where: {
            id
        }
    });
    return deletedProduct;
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}