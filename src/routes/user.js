const express = require("express")
const router = express.Router();
const controller = require("../controllers/user")

router.get("/login",controller.login);
router.get("/register",controller.register);
router.get("/logout",controller.logout);
router.get("/profile",controller.profile);
router.get("/edit",controller.edit);

router.post("/register",controller.save);
router.put("/update",controller.update);
router.put("/disable",controller.disable);


module.exports = router;