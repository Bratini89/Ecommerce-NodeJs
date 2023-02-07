const DataTypes = require("sequelize").DataTypes;
const _car = require("./car");
const _order = require("./order");
const _product = require("./product");
const _product_in_Cart = require("./product_in_Cart");
const _product_in_order = require("./product_in_order");
const _users = require("./users");

function initModels(sequelize) {
  const car = _car(sequelize, DataTypes);
  const order = _order(sequelize, DataTypes);
  const product = _product(sequelize, DataTypes);
  const product_in_Cart = _product_in_Cart(sequelize, DataTypes);
  const product_in_order = _product_in_order(sequelize, DataTypes);
  const users = _users(sequelize, DataTypes);

  product_in_Cart.belongsTo(car, { as: "cart", foreignKey: "cart_id"});
  car.hasMany(product_in_Cart, { as: "product_in_Carts", foreignKey: "cart_id"});
  product_in_order.belongsTo(order, { as: "order", foreignKey: "order_id"});
  order.hasMany(product_in_order, { as: "product_in_orders", foreignKey: "order_id"});
  product.belongsTo(product_in_order, { as: "id_product_in_order", foreignKey: "id"});
  product_in_order.hasOne(product, { as: "product", foreignKey: "id"});
  car.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(car, { as: "cars", foreignKey: "user_id"});
  order.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(order, { as: "orders", foreignKey: "user_id"});
  product.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(product, { as: "products", foreignKey: "user_id"});

  return {
    car,
    order,
    product,
    product_in_Cart,
    product_in_order,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
