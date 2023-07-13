import "./search-filter.js";
import "./scroll-hide.js";

const box = document.getElementById("box");
export const ul = document.querySelector('.scroll-hide');

let changeUrl = "https://fakestoreapi.com/products";

const renderCard = ({ title, image, price }) => {
  const productCard = `
  <div class='card'>
   <div class='text'>
    <div class='title'><b>${title}</b></div>
     <div class='price'><b>Price:</b> $${price}</div>
     <button class='buy'>Buy</button></div>
                <img src=${image} class='img-product'>
                  </div>`;
  return productCard;
};

const fetchApi = async (categoryUrl) => {
  const response = await fetch(categoryUrl);
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

ul.addEventListener('click' , event => {
  event.target.id === 'men' ? changeUrl = "https://fakestoreapi.com/products/category/men's clothing" :
  event.target.id === 'women' ? changeUrl = "https://fakestoreapi.com/products/category/women's clothing" :
  event.target.id === 'jewelery' ? changeUrl = "https://fakestoreapi.com/products/category/jewelery" :
  event.target.id === 'electronics' ? changeUrl = "https://fakestoreapi.com/products/category/electronics" :
  changeUrl = "https://fakestoreapi.com/products";
  fetchApi(changeUrl);
})