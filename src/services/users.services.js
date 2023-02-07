const models = require("../models");

class UsersServices {
  static async getWithOrders(id) {
    try {
      const result = await models.users.findOne({
        where: [id],
        attributes: {
          exclude: ["password"],
        },
        include: {
          model: models.order,
          as: "orders",
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getById(id) {
    try {
      const result = await models.users.findOne({
        where: { id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = UsersServices;
