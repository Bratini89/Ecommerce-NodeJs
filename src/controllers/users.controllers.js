const UsersServices = require("../services/users.services");

const getUserWithOrders = async (req, res) => {
    try {
      const { id } = req.params;
      const result = await UsersServices.getWithOrders(id);
      res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

module.exports = {
    getUserWithOrders
};