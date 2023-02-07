const { Router } = require('express');
const { register, login } = require('../controllers/auth.controller');//{} 


const router = Router();

/** 
 * @openapi
 * /api/v1/auth/register:
 *   post:
 *     summary: Creating a new user into the application and sending a (Welcome Email)
 *     tags:
 *       - Auth
 *     requestBody:
 *       description: Required fields to create a new user
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schema/register'
 *     responses:
 *       201:
 *         description: User Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User created
 *       400:
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Something wrong
 * /api/v1/auth/login:
 *   post:
 *     summary: Login with existing user into the app
 *     tags:
 *       - Auth
 *     requestBody:
 *       description: Required fields to login user
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schema/login'
 *     responses:
 *       200:
 *         descripcion: Login
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schema/loginResponse'
 *       400:
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: user not found
 */

router.post('/register', register);
router.post('/login', login);

module.exports = router;