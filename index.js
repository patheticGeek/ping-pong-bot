const axios = require("axios").default;
const express = require("express");

const dev = process.env.NODE_ENV !== "production";
const PORT = parseInt(process.env.PORT, 10) || 3000;

const server = express();

(async () => {
  server.get("/", (req, res) => {
    const link = req.query.link ? req.query.link.trim() : null;
    let toSend;
    if (!link || link === "") {
      toSend = "Send your query here: /pingback?link=https://example.com";
    } else {
      const resp = await axios.get(link);
      toSend = {
        error: false,
        message: `URL: ${resp.config.url}, Status: ${resp.status}, Status Text: ${resp.statusText}`
      };
    }
    console.log(toSend);
    res.send(toSend);
  });

  server.get("/ping", (req, res) => {
    res.send(`Pong. Dev: ${dev} Port: ${PORT}`);
  });

  server.get("/pingback", async (req, res) => {
    const link = req.query.link ? req.query.link.trim() : null;
    let toSend;
    if (!link || link === "") {
      toSend = { error: true, message: "Link not provided" };
    } else {
      const resp = await axios.get(link);
      toSend = {
        error: false,
        message: `URL: ${resp.config.url}, Status: ${resp.status}, Status Text: ${resp.statusText}`
      };
    }
    console.log(toSend);
    res.json(toSend);
  });

  server.listen(PORT, () => {
    console.log(`> Running on http://localhost:${PORT}`);
  });
})();
