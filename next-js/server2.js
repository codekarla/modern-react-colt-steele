const express = require("express");

// server.js
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get("/p/:id", (req, res) => {
    app.render(req, res, "/post", { id: req.params.id });
  });

  server.get("*", (req, res) => {
    handle(req, res);
  });

  server.listen(3000, () => {
    console.log("Express server is listening on Port 3000!");
  });
});
