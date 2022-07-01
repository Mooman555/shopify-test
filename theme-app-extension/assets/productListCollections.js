if (
  window.location.pathname === "/" ||
  window.location.pathname === "/collections/all"
) {
  let products = document.getElementsByClassName("card-information");
  let productsList = Array.from(products);

  productsList.map((product, i) => {
    let integerValue = Number(product?.innerText?.replace(/[^0-9]+/g, ""));

    let div = document.createElement("div");
    let pLabel = document.createElement("p");
    let priceLabel = document.createElement("p");
    pLabel.textContent = "Loyalty Points";
    priceLabel.textContent = integerValue / 100;

    div.classList.add("loyalty-collection-page");

    pLabel.classList.add("loyalty-pLabel");
    priceLabel.classList.add("loyalty-collection-priceLabel");

    div.appendChild(pLabel);
    div.appendChild(priceLabel);

    // linebreak = document.createElement("br");
    // parent[0].appendChild(linebreak)
    products[i].appendChild(div);
  });
}
