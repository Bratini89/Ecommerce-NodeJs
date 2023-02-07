const models = require("../models");

class ProductInOrderServices {
  static async create(orderId, cart_id, product_id, quantity, price) {
    try {
      const result = await models.product_in_order.create({
        order_id: orderId,
        cart_id: cart_id,
        product_id: product_id,
        quantity: quantity,
        price: price,
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getById(id) {
    try {
      const result = await models.product_in_order.findAll({
        where: { order_id: id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async update(id) {
    try {
      const field = { status: "purchased" };
      const result = await models.product_in_order.update(field, {
        where: { order_id: id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductInOrderServices;
