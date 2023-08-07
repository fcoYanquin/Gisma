const express = require("express");
var cors = require('cors')
const app = express();
const port = 3000;
const todoRouter = require("./routes/todo");

app.use(express.json());
app.use(cors())

app.use(cors({
  credentials: true,
  preflightContinue: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH' , 'DELETE', 'OPTIONS'],
  origin: true
}));

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.use("/actividades", todoRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({ message: err.message });
  return;
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});