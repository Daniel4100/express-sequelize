const productsControllers = require("./products.controllers");

const getAllProducts = (req, res) => {
  productsControllers.getAllProducts()
    .then((products) => {
      res.status(200).json(products);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const getProductById = (req, res) => {
  const id = req.params.id;
  productsControllers.getProductById(id)
    .then((product) => {
      res.status(200).json(product);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const createProduct = (req, res) => {
  const { name, categry, price, isAvailable } = req.body;
  if (name && categry && price ) {
    productsControllers.createProduct({ name, categry, price, isAvailable })
      .then((product) => {
        res.status(200).json(product);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  } else {
    res.status(400).json({
      message: "Bad request",
      fields: {
        name: "string",
        categry: "string",
        price: "Number",
        isAvailable: "Boolean"
      },
    });
  }
};
const patchProduct = (req, res) => {
  const id = req.params.id;
  const { name, categry, price, isAvailable } = req.body;
  productsControllers.updateProduct(id, { name, categry, price, isAvailable })
    .then((product) => {
      if (product[0]) {
        res.status(200).json({
          message: `Product with id ${id} updated`,
        });
      } else {
        res.status(404).json({
          message: `Product with id ${id} not found`,
        });
      }
    })
    .catch((err) => {
      res.status(404).json({
        message: err.message,
      });
    });
};

const putProduct = (req, res) => {
  const id = req.params.id;
  const { name, categry, price, isAvailable } = req.body;
  if (name && categry && price && isAvailable) {
    productsControllers.updateProduct(id, req.body)
      .then((product) => {
        if (product[0]) {
          res.status(200).json({
            message: `Product with id ${id} updated`,
          });
        } else {
          res.status(404).json({
            message: `Product with id ${id} not found`,
          });
        }
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  } else {
    res.status(400).json({
      message: "Bad request",
      fields: {
        name: "string",
        categry: "string",
        price: "Number",
        isAvailable: "Boolean",
      },
    });
  }
};

const deleteProduct = (req, res) => {
  const id = req.params.id;
  productsControllers.deleteProduct(id)
    .then((product) => {
      res.status(200).json({
        message: `Product with id ${id} deleted`,
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: `Product with id ${id} not found`,
      });
    });
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  putProduct,
  patchProduct,
  deleteProduct
};
