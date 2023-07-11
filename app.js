import './search-filter.js';
import './scroll-hide.js';

const box = document.getElementById("box");
const allFilter = document.querySelector('.all-filter');
const menFilter = document.querySelector('.men-filter');
const womenFilter = document.querySelector('.women-filter');
const jeweleryFilter = document.querySelector('.jewelery-filter');
const electronicsFilter = document.querySelector('.electronics-filter');

let changeUrl = '';

const renderCard = ({ title, image, price }) => {
  const productCard = `
  <div class='card'>
   <div class='text'>
    <div class='title'>${title}</div>
     <div class='price'>Price:$${price}</div>
     <button class='buy'>Buy</button></div>
                <img src=${image} class='img-product'>
                  </div>`;
  return productCard;
};

const fetchApi = async (categoryUrl) => {
  const response = await fetch(`https://fakestoreapi.com/products${categoryUrl}`);
  const data = await response.json();
  console.log(data);

  const productList = data.map((item) => {
    return renderCard({
      title: item.title,
      image: item.image,
      price: item.price,
    });
  });

  box.innerHTML = productList.join("");
};

fetchApi(changeUrl);

allFilter.addEventListener('click', () => {
  changeUrl = "";
  fetchApi(changeUrl);
});

menFilter.addEventListener('click', () => {
changeUrl = "/category/men's clothing";
fetchApi(changeUrl);
});

womenFilter.addEventListener('click', () => {
changeUrl = "/category/women's clothing";
fetchApi(changeUrl);
});

jeweleryFilter.addEventListener('click', () => {
changeUrl = "/category/jewelery";
fetchApi(changeUrl);
});

electronicsFilter.addEventListener('click', () => {
changeUrl = "/category/electronics";
fetchApi(changeUrl);
});