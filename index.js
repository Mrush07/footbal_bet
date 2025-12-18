const express = require("express");
const fetch = require("node-fetch");
const app = express();

app.get("/scorers", async (req, res) => {
  try {
    const response = await fetch("https://api.football-data.org/v4/competitions/SA/scorers", {
      headers: { "X-Auth-Token": "f8bc98d037144f6193cfc95f91679c99" }
    });
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Proxy działa na porcie ${PORT}`));
