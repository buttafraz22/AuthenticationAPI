const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const {validateToken}  = require('../utils/accessMiddleware');
/* const { SecureAPI } = require('../utils/accessMiddleware'); */

router.post('/', userController.createUser);
router.get('/', userController.getUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

router.get('/getNotToken', userController.loginWithoutToken);
router.post('/getToken', userController.login);

router.post('/tokenize', validateToken, userController.dashboard);

module.exports = router;