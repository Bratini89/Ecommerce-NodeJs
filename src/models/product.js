const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return product.init(sequelize, DataTypes);
}


/**
 * @openapi
 * components:
 *   schema:
 *     newproduct:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: PS4
 *         price:
 *           type: int
 *           example: 350
 *         availableQty:
 *           type: int
 *           example: 35
 *         user_id:
 *           type: int
 *           example: 6
 *         image:
 *           type: string
 *           example: https://ps4-nitido.jpg
 *     product1:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: 1
 *         name:
 *           type: string
 *           example: Motorcycle
 *         price:
 *           type: int
 *           example: 3500
 *         availableQty:
 *           type: int
 *           example: 4
 *         status:
 *           type: string
 *           example: available
 *         user_id:
 *           type: int
 *           example: 1
 *         image:
 *           type: string
 *           example: https://motorcyle-new.jpg
*/


class product extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'product_in_order',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false
    },
    available_qty: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'product',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "product_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
