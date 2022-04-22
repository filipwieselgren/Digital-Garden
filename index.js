const hmMenuCon = document.querySelector(".hm-menu-con");
const hmMenu = document.querySelector(".hm-menu");
const menuUl = document.querySelector(".menu-ul");
const logoHero = document.querySelector(".hero-img-con");
const logoHeroAfterHover = document.querySelector(".logo-hero");
const cross = document.querySelector(".cross");
const treeToServices = document.querySelector(".climb-txt");
const atagNav1 = document.querySelector(".atag-nav1");
const atagNav2 = document.querySelector(".atag-nav2");
const atagNav3 = document.querySelector(".atag-nav3");
const switchToServices = document.querySelector(".tree-to-services");

hmMenuCon.addEventListener("click", () => {
  hmMenu.src = "./images/hm-menu-before-col.png";
  setTimeout(changeImg, 500);
});

function changeImg() {
  logoHero.style.display = "none";

  hmMenu.src = "./images/hm-menu-col.png";
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

  hmMenu.src = "./images/hm-menu-before-hover.png";
});

treeToServices.addEventListener("mouseover", () => {
  logoHeroAfterHover.src = "./images/tree-hover.png";
  treeToServices.style.cursor = "pointer";
});
treeToServices.addEventListener("mouseout", () => {
  logoHeroAfterHover.src = "./images/hero-tree-phone.png";
});
treeToServices.addEventListener("click", () => {
  switchToServices.src = "./images/tree-upside-click.png";
});

atagNav1.addEventListener("mouseover", () => {
  logoHeroAfterHover.src = "./images/tree-hover.png";
  treeToServices.style.cursor = "pointer";
});

atagNav1.addEventListener("mouseout", () => {
  logoHeroAfterHover.src = "./images/hero-tree-phone.png";
});
atagNav2.addEventListener("mouseover", () => {
  logoHeroAfterHover.src = "./images/tree-hover.png";
  treeToServices.style.cursor = "pointer";
});

atagNav2.addEventListener("mouseout", () => {
  logoHeroAfterHover.src = "./images/hero-tree-phone.png";
});
atagNav3.addEventListener("mouseover", () => {
  logoHeroAfterHover.src = "./images/tree-hover.png";
  treeToServices.style.cursor = "pointer";
});

atagNav3.addEventListener("mouseout", () => {
  logoHeroAfterHover.src = "./images/hero-tree-phone.png";
});
