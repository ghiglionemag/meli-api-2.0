function main() {
  const formEl = document.querySelector(".search-form");
  formEl.addEventListener("submit", function (e) {
    e.preventDefault();
    const inputQuery = e.target.buscar.value;
    fetch(
      "https://api.mercadolibre.com/sites/MLA/search?q=" +
        inputQuery 
    )
      .then((response) => response.json())
      .then(
        (data) => paginationComp(data.results),
        (element = document.getElementById("home-content")),
        element.remove()
      );
  });
}
main();
