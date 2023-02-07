const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return order.init(sequelize, DataTypes);
}

/**
 * @openapi
 * components:
 *   schema:
 *     orders:
 *       type: object
 *       properties:
 *         id:
 *           type: int
 *           example: 2
 *         username:
 *           type: string
 *           example: Carlos
 *         email:
 *           type: string
 *           example: timomatic58@gmail.com
 *         orders:
 *           type: array
 *           items:
 *             properties:
 *               id:
 *                 type: int
 *                 example: 2
 *               total_price:
 *                 type: int
 *                 example: 250
 *               user_id:
 *                 type: int
 *                 example: 2
 *               status:
 *                 type: string
 *                 example: purchased
 */

class order extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    total_price: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    sequelize,
    tableName: 'order',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "order_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
