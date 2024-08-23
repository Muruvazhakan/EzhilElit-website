const express = require("express");

const validate = require("express-validator");

const userController = require("../Controller/user-controller");
const router = express.Router();

router.get('/',userController.findUser);
router.get('/login',userController.loginUser);
router.post('/signin',[validate.check('mailid').notEmpty(), validate.check('password').notEmpty()],userController.signIn);

module.exports = router;

