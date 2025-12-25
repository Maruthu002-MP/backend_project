const express = require("express");
const dotenv = require("dotenv");
const errorHandler = require("./middleware/error.middleware");

dotenv.config();
const app = express();

app.use(express.json());

app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/tasks", require("./routes/task.routes"));
app.use("/api/categories", require("./routes/category.routes"));

app.use(errorHandler);

module.exports = app;
