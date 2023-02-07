const { Router } = require("express");
const getUserWithOrders = require("../controllers/users.controllers");

const router = Router();

router.get("/orders/:id", getUserWithOrders);

module.exports = router;