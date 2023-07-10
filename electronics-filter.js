import { renderCard } from "./app.js";

const electronicsFilter = document.querySelector('.electronics-filter');

  
  const fetchApiElectronics = async () => {
    const response = await fetch("https://fakestoreapi.com/products/category/electronics");
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

  electronicsFilter.addEventListener('click', fetchApiElectronics)