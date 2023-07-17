import "./search-filter.js";
import "./scroll-hide.js";

export const box = document.getElementById("box");
export const ul = document.querySelector('.scroll-hide');

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

// ho rinominato il parametro "category"
// cerca di creare sempre funzioni che parlano,
// l'endpoint potrebbe anche essere diverso da /category/
// quindi è bene dargli un nome generico;
const fetchApi = async ( toEndpoint = "", id = "" ) => {
  // il baseURL deve sempre essere senza endpoint
  // se ti manca il concetto di "endpoint" chiedimelo e te lo spiego
  const baseUrl = "https://fakestoreapi.com/";
  const response = await fetch(baseUrl + toEndpoint + id);
  const data = await response.json();

  console.log(data);

  const productList = data.map((item) => {
    // qui potevi scrivere il codice meglio: 
    // piccolo trucco:
    // 
    // const {title, image, price} = item
    // return renderCard({title, image, price})
    // 
    // che ne pensi?

    return renderCard({
      title: item.title,
      image: item.image,
      price: item.price,
    });
  });

  box.innerHTML = productList.join("");
};

fetchApi('products');

ul.addEventListener('click' , event => {
  // Puoi usare fetchApi() quando non devi passare argomenti li hai già dati di default
  // alla definizione della funzione;
  // in questo caso di default passiamo "products" il baseURL è meglio tenerlo pulito
  event.target.id ? fetchApi('products/category/', event.target.id) : fetchApi('products')
});