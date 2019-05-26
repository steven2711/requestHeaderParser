const express = require("express");

const app = express();

const PORT = 3000;

app.get("/api/whoami", function(req, res, next) {
  let ipAddress = req.ip;
  let language = req.get("Accept-Language");
  let software = req.get("User-Agent");

  res.json({ ipaddress: ipAddress, language: language, software: software });
});

app.listen(PORT, () => {
  console.log(`App is running on port: ${PORT}...`);
});
