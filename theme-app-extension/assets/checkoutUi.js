// const { default: Shopify } = require("@shopify/shopify-api");

if (window.location.pathname === "/account") {
  console.log("helloyyyyyyyyy");

  window.addEventListener("DOMContentLoaded", (event) => {
    let totalPoints = 0;
    let parent = document.getElementsByClassName("customer");

    let targetedTds = document.getElementsByTagName("td");

    targetedTds = document.querySelectorAll(`td[data-label="Total"]`);
    targetedTds = Array.from(targetedTds);

    targetedTds.map((element) => {
      let integerValue = Number(element?.innerText?.replace(/[^0-9]+/g, ""));
      totalPoints = totalPoints + integerValue;
    });

    let div = document.createElement("div");
    let pLabel = document.createElement("p");
    let priceLabel = document.createElement("p");
    pLabel.textContent = "Loyalty Points";
    priceLabel.textContent = totalPoints / 100;

    div.classList.add("loyalty-div-wrapper");

    pLabel.classList.add("loyalty-pLabel");
    priceLabel.classList.add("loyalty-priceLabel");

    div.appendChild(pLabel);
    div.appendChild(priceLabel);

    // linebreak = document.createElement("br");
    // parent[0].appendChild(linebreak)
    parent[0].appendChild(div);
  });
}
