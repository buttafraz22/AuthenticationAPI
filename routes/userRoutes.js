const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post('/', userController.createUser);
router.get('/', userController.getUser);
router.put('/:id', userController.updateUser);

module.exports = router;