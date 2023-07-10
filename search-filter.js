 const searchBar = document.querySelector(".search");

 const filterMethod = () => {
  const filter = searchBar.value.toLowerCase();
  const titles = document.querySelectorAll(".title");
  
  titles.forEach((el) => {
    let text = el.textContent;
    if (text.toLowerCase().includes(filter.toLowerCase())) {
      el.parentNode.parentNode.style.display = "";
    } else {
      el.parentNode.parentNode.style.display = "none";
    }
  });
};

searchBar.addEventListener("input", filterMethod);