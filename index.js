const express = require("express");
const fetch = require("node-fetch");
const app = express();

app.get("/scorers", async (req, res) => {
  try {
    const response = await fetch("https://api.football-data.org/v4/competitions/SA/scorers", {
      headers: { "X-Auth-Token": process.env.FOOTBALL_API_KEY }
    });
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Proxy działa na porcie ${PORT}`));
