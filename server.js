const express = require("express");
const hbs = require("hbs");
const path = require("path");
const axios = require("axios");
const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
  res.render("index");
})
app.get("/movieInfo", (req, res) => {
  const title = req.query.title;
  const apiKey = process.env.API_KEY;
  axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&t=${title}`)
  .then((response) => {
    const title = response.data.Title;
    const year = response.data.Year;
    const rated = response.data.Rated;
    const released = response.data.Released;
    const runtime = response.data.Runtime;
    const genre = response.data.Genre;
    const plot = response.data.Plot;
    const poster = response.data.Poster;
    res.send({
      title,
      year,
      rated,
      released,
      runtime,
      genre,
      plot,
      poster,
    });
  })
  .catch((response) => {
    res.send({});
  })
})
app.listen("3000", () => {
  console.log("listening on port 3000");
})
