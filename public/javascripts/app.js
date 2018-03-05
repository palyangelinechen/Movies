$(document).ready(function() {
  const titleInput = $("#movie-title");
  const title = $("#title");
  const year = $("#year");
  const rated = $("#rated");
  const released = $("#released");
  const runtime = $("#runtime");
  const genre = $("#genre");
  const plot = $("#plot");
  const poster = $("#poster");
  const errorMessage = $("#error-message");
  titleInput.on("keyup", function(e) {
    if (e.key === "Enter") {
      const movieTitle = titleInput.val();
      titleInput.val("");
      $.get(`/movieInfo?title=${movieTitle}`, (response) => {
        errorMessage.addClass("hidden");
        poster.removeClass("hidden");
        title.text(response.title);
        year.text(`Year: ${response.year}`);
        rated.text(`Rated: ${response.rated}`);
        released.text(`Released: ${response.released}`);
        runtime.text(`Runtime: ${response.runtime}`);
        genre.text(`Genre: ${response.genre}`);
        plot.text(`Plot: ${response.plot}`);
        poster.attr("src", response.poster);
      })
    }
  })
})
