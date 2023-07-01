const box = document.querySelector(".box");

const fetchApi = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  console.log(data);
};

fetchApi();

const productMock = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  rating: {
    rate: 3.9,
    count: 120,
  },
};

const renderCard = () => {
  const { title, image } = productMock;
  console.log(title);
  displayCard = `<div class="card">
   <p>${title}</p>
   <img class="img-card" src="${image}">
   </div>`;
  box.innerHTML = displayCard;
};

renderCard();
