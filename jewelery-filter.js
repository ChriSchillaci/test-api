import { renderCard } from "./app.js";

const jeweleryFilter = document.querySelector('.jewelery-filter');

  
  const fetchApiJewelery = async () => {
    const response = await fetch("https://fakestoreapi.com/products/category/jewelery");
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

  jeweleryFilter.addEventListener('click', fetchApiJewelery)