import { renderCard } from "./app.js";

const menFilter = document.querySelector('.men-filter');

  
  const fetchApiMen = async () => {
    const response = await fetch("https://fakestoreapi.com/products/category/men's clothing");
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

  menFilter.addEventListener('click', fetchApiMen)