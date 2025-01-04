const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/search", async (req, res) => {
  const query = req.query.query;
  try {
    const result = await axios.get(`https://v2.jokeapi.dev/joke/Any?contains=${query}`);
    res.render("index.ejs", {
      joke: result.data.joke || `${result.data.setup} - ${result.data.delivery}`
    });
  } catch (error) {
    console.log(error.response.data);
    res.status(500).send("Error fetching joke");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});