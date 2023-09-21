const express = require("express");
const morgan = require("morgan");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(morgan("combined"));

app.get("/health", (_req, res) => {
  res.send({ status: "ok" }).status(200);
});

app.get("/data", (_req, res) => {
  res.json({
    data: {
      language: ["Javascript", "Typescript", "Node.js"],
      framework: ["react", "express"],
    },
  });
});

app.use("*", (req, res) => res.sendStatus(404));

app.listen(PORT, () => console.log(`Test app started on port ${PORT}`));
