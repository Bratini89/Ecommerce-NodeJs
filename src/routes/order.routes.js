const { Router } = require('express');
const {getAllOrders, payOrder} = require('../controllers/order.controllers');
const {getUserWithOrders} = require('../controllers/users.controllers');
const authMiddleware = require('../middlewares/auth.middleware');

const router = Router();
/** 
 * @openapi
 * /api/v1/order/user/{id}:
 *   get:
 *     security:
 *     - bearerAuth: []
 *     summary: Get order by user id
 *     tags:
 *       - Orders
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *           minimum: 1
 *         required: true
 *         description: User with ID to get order
 *     responses:
 *       200:
 *         description: User with orders
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schema/orders'
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
 * /api/v1/order/{id}:
 *   put:
 *     security:
 *     - bearerAuth: []
 *     summary: Paying Order
 *     tags:
 *       - Orders
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *           minimum: 1
 *         required: true
 *         description: ID order to pay
 *     responses:
 *       200:
 *         description: Order paid
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Order paid
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

router.get('/',authMiddleware, getAllOrders);
router.put('/:id',authMiddleware, payOrder);
router.get('/user/:id',authMiddleware, getUserWithOrders);


module.exports = router;