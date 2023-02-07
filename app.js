// Select The Elements
let toggleBtn;
let bigWrapper;
let hamburgerMenu;

function declare() {
    toggleBtn = document.querySelector(".toggle-btn");
    bigWrapper = document.querySelector(".big-wrapper");
    hamburgerMenu = document.querySelector(".hamburger-menu");
}

const main = document.querySelector("main");
declare();


let dark = false;

function toggleAnimation() {
 //Clone The Wrapper
  dark = !dark;
  let clone = bigWrapper.cloneNode(true);
  if(dark) {
    clone.classList.remove("light");
    clone.classList.add("dark");
  } else {
    clone.classList.remove("dark");
    clone.classList.add("light");
  }
  clone.classList.add("copy");
  main.appendChild(clone);

  document.body.classList.add("stop-scrolling");

  clone.addEventListener("animationend", () => {
   bigWrapper.remove();
   clone.classList.remove("copy");
   // Reset variables
   declare();
   events();
   document.body.classList.remove("stop-scrolling");
  })
}


function events() {
    toggleBtn.addEventListener("click", toggleAnimation);
    hamburgerMenu.addEventListener("click", () => {
        bigWrapper.classList.toggle("active");
    })
}

events();



