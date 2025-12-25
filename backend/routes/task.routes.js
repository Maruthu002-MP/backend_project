const router = require("express").Router();
const protect = require("../middleware/auth.middleware");
const task = require("../controllers/task.controller");

router.use(protect);

router.post("/", task.createTask);
router.get("/", task.getTasks);
router.get("/:id", task.getTask);
router.put("/:id/status", task.updateStatus);
router.delete("/:id", task.deleteTask);

module.exports = router;
