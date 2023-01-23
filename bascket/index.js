const product = [
  {
    id: 1,
    title: "Lenovo Yoga",
    price: 3000,
  },
  {
    id: 2,
    title: "Acer Aspire",
    price: 1800,
  },
  {
    id: 3,
    title: "Dell Vostro",
    price: 3400,
  },
];

let order = [];

function renderCart() {
  const cart = document.querySelector("#bascket-items");
  cart.innerHTML = "";
  order.forEach((item) => {
    const el = document.createElement("li");
    el.innerText = item.title;
    el.onclick = () => removeFromBascket(item.id);
    cart.appendChild(el);
  });
}
console.log("first", order);
function removeFromBascket(prodId) {
  order = order.filter((el) => el.id !== prodId);
  renderCart();
  renderTotalPrice();
}
function addToBasket(prodId) {
  if (order.find((el) => el.id === prodId)) {
    return alert("The product is in order");
  }

  //Add product in basket
  const currentProduct = product.find((item) => item.id === prodId);
  order = [...order, currentProduct];
  console.log(order);
  renderCart();
  renderTotalPrice();
}

function renderTotalPrice() {
  let totalPrice = order.reduce((acc, el) => (acc += el.price), 0);
  document.querySelector("#total").innerText = totalPrice;
}
