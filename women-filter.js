import { renderCard } from "./app.js";

const womenFilter = document.querySelector('.women-filter');

  
  const fetchApiWomen = async () => {
    const response = await fetch("https://fakestoreapi.com/products/category/women's clothing");
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

  womenFilter.addEventListener('click', fetchApiWomen)