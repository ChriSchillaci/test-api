import { box } from "./app.js";

const searchBar = document.querySelector(".search");

const filterMethod = () => {
  const filter = searchBar.value.toLowerCase();
  const titles = document.querySelectorAll(".title");
  // const cards = document.querySelectorAll(".card");

  titles.forEach((el) => {
    let text = el.textContent;
    if (text.toLowerCase().includes(filter.toLowerCase())) {
      el.parentNode.parentNode.style.display = "";
    } else {
      el.parentNode.parentNode.style.display = "none";
    }
    //una condizione dove tutte le card hanno il display none
  })
  const cardsDisplayNone = (cards) => {
    let allCardsDisplayNone = true;
    for (let i in cards) {
      if(cards[i].style.display !== 'none') {
        allCardsDisplayNone = false;
        break;
      }
    }
    return allCardsDisplayNone;
  };

  const els = Array.from(document.querySelectorAll('.card'));
  const results = cardsDisplayNone(els);
  const para = document.getElementsByTagName('p');

  if(results && para.length < 1) {
    console.log('results');
    const noCards = document.createElement('p');
    box.appendChild(noCards);
    noCards.innerHTML = 'hello'
  } else {
    console.log('no results');
    box.removeChild(box.lastChild);
  }
};

searchBar.addEventListener("input", filterMethod);
