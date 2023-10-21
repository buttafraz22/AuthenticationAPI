const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post('/', userController.createUser);
router.get('/', userController.getUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

router.get('/getNotToken', userController.loginWithoutToken)

module.exports = router;