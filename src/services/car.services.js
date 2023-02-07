const models = require('../models');

class CartServices {
  static async createCart(id){
    try {
      const result = await models.car.create({user_id: id, total_price: 0});
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async updateCart(userId, totalPriceCart){
    try {
      const field = { 
        total_price: totalPriceCart,
        status: "pending"
       };
      const result = await models.car.update(field, { where: {id: userId} });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async emptyCart(id){
    try {
      const field = { 
        status: "completed",
        total_price: 0
      }
      const result = await models.car.update(field, { where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getCartById(id){
    try {
      const cart = await models.car.findOne({
        where: {id}
      });
      return cart;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = CartServices;