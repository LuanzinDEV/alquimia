document.querySelector(".menu-toggle").addEventListener("click", function() {
    document.querySelector(".nav_movel").classList.toggle("nav-abrir");
});


document.querySelector(".close").addEventListener("click", function() {
    document.querySelector(".nav_movel").classList.remove("nav-abrir");
});

//Card
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');
const cardContainer = document.querySelector('.card-container');

leftBtn.addEventListener('click', () => {
  cardContainer.scrollBy({
    left: -200, // Número de pixels para rolar à esquerda
    behavior: 'smooth'
  });
});

rightBtn.addEventListener('click', () => {
  cardContainer.scrollBy({
    left: 200, 
    behavior: 'smooth'
  });
});