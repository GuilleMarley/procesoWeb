function fetchFilmButtons() {
  fetch("library.json")
    .then(response => response.json())
    .then(data => createFilmButtons(data))
    .catch(error => console.error(error));
}

function createFilmButtons(data) {
  var container = document.getElementById("buttons-container");

  data.films.forEach(function (film) {
    var filmButton = document.createElement("button");
    filmButton.textContent = film.name;
    filmButton.classList.add("auto-button");

    // Crear elemento de imagen
    var filmImage = document.createElement("img");
    filmImage.src = film.pic;
    filmImage.alt = film.name;
    filmButton.appendChild(filmImage);

    filmButton.addEventListener("click", function () {
      window.open(film.link);
    });
    container.appendChild(filmButton);
  });
}