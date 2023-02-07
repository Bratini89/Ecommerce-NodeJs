const { Router } = require("express");
const { addProductToCart, buyCart } = require("../controllers/car.controllers");

const authMiddleware = require("../middlewares/auth.middleware");

const router = Router();

/**
 * @openapi
 * /api/v1/cart/add:
 *   post:
 *     security:
 *     - bearerAuth: []
 *     summary: Add product to cart
 *     tags:
 *       - Cart
 *     requestBody:
 *       description: Required fields to add product to cart
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schema/addproduct'
 *     responses:
 *       201:
 *         description: Add product
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Product add to cart
 *       400:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Error
 * /api/v1/cart/{id}:
 *   put:
 *     security:
 *     - bearerAuth: []
 *     summary: Buy cart
 *     tags:
 *       - Cart
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *           minimum: 1
 *         required: true
 *         description: Buy Cart by id user, clear cart/product in cart and create order/product in order (send email)
 *     responses:
 *       200:
 *         description: Cart bought
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: cart bought
 *       400:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Error
 */

router.post('/add',authMiddleware, addProductToCart);
router.put('/:id',authMiddleware, buyCart);

module.exports = router;