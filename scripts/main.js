
const left_menu = (e) => {
  console.log(e.target.checked);
}

const toggle_nav = () => {
  const header = document.querySelector("header");
  header.classList.toggle("active");
}

const toggle_desktop_nav = (e) => {
  var text = e.textContent;
  const header = document.querySelector("header");
  header.classList.toggle("active-desktop");
}





//PRICING EVENTS HOME PAGE
var pricing_container = document.querySelector('.pricing');
var pricing_wrapper = document.querySelector('.pricing-wrapper');
var pricing_nav_link = document.querySelector("#pricing-nav-link");


const close_pricing = () => {
  pricing_wrapper.style.transform = "scale(0)";
  setTimeout(()=> {pricing_container.style.display = "none";}, 350 );
  
}

pricing_nav_link.addEventListener('click', () => {
  pricing_container.style.display = "flex";
  
  setTimeout(() => {pricing_wrapper.style.transform = "scale(1)";}, 100);
  
});




