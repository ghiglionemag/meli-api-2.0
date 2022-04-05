
function main() {
  const formEl = document.querySelector(".search-form");
  formEl.addEventListener("submit", function (e) {
    e.preventDefault();
    const inputQuery = e.target.buscar.value;
    fetch("https://api.mercadolibre.com/sites/MLA/search?q=" + inputQuery +"&limit=50")
      .then((response) => response.json())
      .then((data) => paginationComp(data.results));
    ;
  });
}
main();
