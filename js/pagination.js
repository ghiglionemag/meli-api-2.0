function paginationComp(results) {
  const list_items = results;

  const list_element = document.getElementById("list");
  const pagination_element = document.getElementById("pagination");

  let current_page = 1;
  let rows = 12;

  function DisplayList(items, wrapper, rows_per_page, page) {
    wrapper.innerHTML = "";
    page--;

    let start = rows_per_page * page;
    let end = start + rows_per_page;
    let paginatedItems = items.slice(start, end);

    for (let i = 0; i < paginatedItems.length; i++) {
      let item = paginatedItems[i];
      console.log(item);
      let item_element = document.createElement("div");
      item_element.classList.add("item-card");
      item_element.innerHTML = `
      <div class="img">
      <img src="${item.thumbnail}" alt=" " class="item-img"/>
      </div>
      <div class="item-descrption">
      <h3 class="item-quantity">Vendidos: ${item.sold_quantity}</h3>
      <h3 class="item-price">$ ${item.price}</h3>
      <h4 class="item-title">${item.title}</h4>
      </div>
     
      `;

      wrapper.appendChild(item_element);
    }
  }

  function SetupPagination(items, wrapper, rows_per_page) {
    wrapper.innerHTML = "";

    let page_count = Math.ceil(items.length / rows_per_page);
    for (let i = 1; i < page_count + 1; i++) {
      let btn = PaginationButton(i, items);
      wrapper.appendChild(btn);
    }
  }

  function PaginationButton(page, items) {
    let button = document.createElement("button");
    button.innerText = page;

    if (current_page == page) button.classList.add("active");

    button.addEventListener("click", function () {
      current_page = page;
      DisplayList(items, list_element, rows, current_page);

      let current_btn = document.querySelector(".pagenumbers button.active");
      current_btn.classList.remove("active");

      button.classList.add("active");
    });

    return button;
  }

  DisplayList(list_items, list_element, rows, current_page);
  SetupPagination(list_items, pagination_element, rows);
}
