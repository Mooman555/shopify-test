if (window.location.pathname === "/cart") {
  let targetButton = document.querySelector('button[name = "plus"]');

  window.addEventListener("click", (event) => {
    if (event.target.name == "plus") {
      setTimeout(() => {
        let value = document.querySelector(".totals__subtotal-value").innerText;
        let exactValue = Number(value.replace(/[^0-9]+/g, ""));
        let loyaltyPoints = document.querySelector(".loyalty-points");
        loyaltyPoints.innerText = exactValue / 100 + " Loyalty Points";
      }, 1500);
    } else if (event.target.name == "minus") {
      setTimeout(() => {
        let value = document.querySelector(".totals__subtotal-value").innerText;
        let exactValue = Number(value.replace(/[^0-9]+/g, ""));
        let loyaltyPoints = document.querySelector(".loyalty-points");
        loyaltyPoints.innerText = exactValue / 100 + " Loyalty Points";
      }, 1500);
    }
  });
}
