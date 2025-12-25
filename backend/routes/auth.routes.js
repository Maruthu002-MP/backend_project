const router = require("express").Router();
const protect = require("../middleware/auth.middleware");
const auth = require("../controllers/auth.controller");

router.post("/register", auth.register);
router.post("/login", auth.login);
router.get("/me", protect, auth.me);

module.exports = router;
