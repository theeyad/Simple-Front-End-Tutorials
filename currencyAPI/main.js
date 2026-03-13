let inp = document.querySelector(".amount");

inp.addEventListener("input", function (e) {
  fetch(
    "https://api.currencyfreaks.com/v2.0/rates/latest?apikey=2f17bf1344f448acb34b43326ce25218",
  )
    .then((res) => res.json())
    .then((data) => {
      let valueInUSD = inp.value;
      let priceInEgpDiv = document.querySelector(".eg-price");

      priceInEgpDiv.childNodes.forEach((child) => child.remove());

      priceInEgpDiv.append(
        document.createTextNode(
          `${Math.round(valueInUSD * data.rates["EGP"])} EGP`,
        ),
      );
    });
});
