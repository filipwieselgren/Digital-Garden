// Hämta loggan
// hämta ul classen
// skapa en till class som man kan toggla till
// använd setTimeout där det ska togglas så menyn syns

const hmMenuCon = document.querySelector(".hm-menu-con");
const hmMenu = document.querySelector(".hm-menu");
const menuUl = document.querySelector(".menu-ul");
const logoHero = document.querySelector(".hero-img-con");
const cross = document.querySelector(".cross");

hmMenuCon.addEventListener("click", () => {
  hmMenu.src = "/images/hm-menu-before-col.png";
  setTimeout(changeImg, 500);
});

function changeImg() {
  logoHero.style.display = "none";

  hmMenu.src = "/images/hm-menu-col.png";
  setTimeout(showHm, 100);
}

function showHm() {
  hmMenuCon.style.display = "none";

  menuUl.classList.toggle("menu-ul-show");
}

cross.addEventListener("click", () => {
  menuUl.classList.toggle("menu-ul-show");
  logoHero.style.display = "block";
  hmMenuCon.style.display = "block";

  hmMenu.src = "/images/hm-menu-before-hover.png";
});
