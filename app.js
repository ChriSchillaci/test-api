import "./search-filter.js";
import './men-filter.js';
import './women-filter.js';
import './jewelery-filter.js';
import './electronics-filter.js';
import './scroll-hide.js';

const box = document.getElementById("box");
const allFilter = document.querySelector('.all-filter');


export const renderCard = ({ title, image, price }) => {
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

const fetchApi = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
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

fetchApi();

allFilter.addEventListener('click', fetchApi)

