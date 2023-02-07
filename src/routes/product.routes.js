const { Router } = require('express');
const {
  createProduct,
  getAllProductsAvailable,
  getProductByUserIdInCart
} = require('../controllers/product.controllers');
const authMiddleware = require('../middlewares/auth.middleware');

const router = Router();

/**
 * @openapi
 * /api/v1/product/create:
 *   post:
 *     security:
 *     - bearerAuth: []
 *     summary: Creating a new product
 *     tags:
 *       - Product
 *     requestBody:
 *       description: Required fields to create a new product
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schema/newproduct'
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schema/newproduct'
 *       400:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Not created
 * /api/v1/product/available:
 *   get:
 *     security:
 *     - bearerAuth: []
 *     summary: get product available
 *     tags:
 *       - Product
 *     responses:
 *       200:
 *         description: Products Available
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schema/product1'
 *       400:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Not found
 * /api/v1/product/{id}:
 *   get:
 *     security:
 *     - bearerAuth: []
 *     summary: Get products in cart by id user
 *     tags:
 *       - Product
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *           minimum: 1
 *         required: true
 *         description: ID of the user to get products in cart
 *     responses:
 *       200:
 *         description: User with products in cart
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 username:
 *                   type: string
 *                   example: Carlos
 *                 cart:
 *                   type: array
 *                   items:
 *                     properties:
 *                       id:
 *                         type: int
 *                         example: 1
 *                       product_in_cart:
 *                         type: array
 *                         items: {}
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

router.post('/create',authMiddleware, createProduct);
router.get('/available',authMiddleware, getAllProductsAvailable);
router.get('/:id',authMiddleware,  getProductByUserIdInCart);

module.exports = router;