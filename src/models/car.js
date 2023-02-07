const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return car.init(sequelize, DataTypes);
}

/**
 * @openapi
 * components:
 *   schema:
 *     addproduct:
 *       type: object
 *       properties:
 *         userId:
 *           type: int
 *           example: 1 
 *         productId:
 *           type: int
 *           example: 3
 *         quantity:
 *           type: int
 *           example: 3
 */

class car extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    total_price: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'car',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "car_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
