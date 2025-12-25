const router = require("express").Router();
const protect = require("../middleware/auth.middleware");
const cat = require("../controllers/category.controller");

router.use(protect);

router.post("/", cat.createCategory);
router.get("/", cat.getCategories);
router.delete("/:id", cat.deleteCategory);

module.exports = router;
