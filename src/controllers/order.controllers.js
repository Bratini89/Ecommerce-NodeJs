const OrderServices = require("../services/order.services");
const ProductServices = require("../services/product.services");
const ProductInOrderServices = require("../services/productInOrder.services");

const createOrder = async (req, res) => {
  try {
    const newOrder = req.body;
    const result = await OrderServices.create(newOrder);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getAllOrders = async (req, res) => {
  try {
    const result = await OrderServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const payOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await OrderServices.getById(id);

    if (order.status === "pending") {
      await OrderServices.update(id);
      const productsInOrder = await ProductInOrderServices.getById(id);

      productsInOrder.forEach(async (product) => {
        const { quantity, product_id } = product.dataValues;
        const productForModified = await ProductServices.getById(product_id);
        const quantityAvailable = productForModified[0].dataValues.availableQty;
        await ProductServices.updateQuantity(
          quantity,
          product_id,
          quantityAvailable
        );
      });

      await ProductInOrderServices.update(id);
      res.status(200).json({ message: "Order Paid" });
    } else {
      res
        .status(200)
        .json({ message: "Order empty, there is not product to pay" });
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

//confirmar las rutas

module.exports = {
  createOrder,
  getAllOrders,
  payOrder,
};
