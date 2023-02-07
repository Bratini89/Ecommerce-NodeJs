const models = require("../models");
const CartServices = require("../services/car.services");
const OrderServices = require("../services/order.services");
const ProductsInCartServices = require("../services/productInCart.services");
const UserServices = require("../services/users.services");
const ProductsInOrderServices = require("../services/productInOrder.services");
const transporter = require("../utils/mailer");
const ProductServices = require("../services/product.services");

const addProductToCart = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;
    if (!userId || !productId || !quantity) {
      return res.status(400).json({ message: "Missing required fields" });
    }
    const productToAdd = await ProductServices.getById(productId);
    const priceUnitProduct = productToAdd[0].price;
    const productInCart = await ProductsInCartServices.add(
      userId,
      productId,
      quantity,
      priceUnitProduct
    );
    if (productInCart) {
      const totalPriceCart = await models.product_in_Cart.sum("price", {
        where: { cart_id: userId },
      });
      await CartServices.updateCart(userId, totalPriceCart);
      res.status(201).json({ message: "Product add to cart" });
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

const buyCart = async (req, res) => {
  try {
    const { id } = req.params;

    const cart = await CartServices.getCartById(id);
    const { user_id, total_price } = cart.dataValues;
    const newOrder = await OrderServices.create(user_id, total_price);
    const orderId = newOrder.dataValues.id;
    const productInCart = await ProductsInCartServices.getByCartId(id);

    productInCart.forEach(async (product) => {
      const { cart_id, product_id, quantity, price } = product.dataValues;
      await ProductsInOrderServices.create(
        orderId,
        cart_id,
        product_id,
        quantity,
        price
      );
    });
    
    if (newOrder) {
      await CartServices.emptyCart(id);
      await ProductsInCartServices.delete(id);

      const buyer = await UserServices.getById(user_id);
      const { email } = buyer.dataValues;
      await transporter.sendMail({
        to: email,
        from: "bratiniiiii@gmail.com",
        subjetc: "Confirmation Purchased",
        html: "<h1>Thank you so much for your purchased!</h1>",
      });

      res.status(200).json({ message: "Cart bought" });
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  addProductToCart,
  buyCart,
};
