const express = require("express")
const router = express.Router();
const controller = require("../controllers/task")

router.get("/create",controller.create);

router.get("/:id",controller.show);

router.get("/edit/:id",controller.edit);


router.post("/save", controller.save);

router.put("/update/:id",controller.update);

router.delete("/delete", controller.delete);

module.exports = router;