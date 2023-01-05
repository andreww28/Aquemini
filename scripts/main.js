

const toggle_nav = () => {
  const header = document.querySelector("header");
  header.classList.toggle("active");
}

const toggle_desktop_nav = (e) => {
  var text = e.textContent;
  const header = document.querySelector("header");
  header.classList.toggle("active-desktop");
}



const edit_link = (link_nodes) => {
  link_nodes.forEach(node =>{
    if(node.id != "edit-btn" && node.classList[0] != "project-item" && node.id!="bottom-nav-link") {
      node.href = node.href.split("?name")[0];
      node.href = node.href + "?name=" + encodeURIComponent(localStorage.getItem("_is_dark_on"));
      console.log(node.href);
    }
  })
}



const all_link_nodes = document.querySelectorAll(".top-nav a, .logo a, .home-btn, #edit-btn, .design-back, .project-item");


const toggle_dark_mode = (is_dark_on) => {
  const root = document.querySelector(':root');
  const _switch = document.querySelector('#dark-mode-switch');
  const setVariables = vars => Object.entries(vars).forEach(v => root.style.setProperty(v[0], v[1]));
  const myVariables = {};

  if(_switch.checked || is_dark_on) {
    const myVariables = {
      "--posted-img-bg-color": "#282339;",
      "--main-bg-color": "#161320",
      "--bg-lightdark": "#1d192a",
      "--between-light-dark": "#1d182d"
    };
    setVariables(myVariables);

  }else {
    const myVariables2 = {
      "--posted-img-bg-color": "var(--light-color)",
      "--main-bg-color": "#FAFBFF",
      "--bg-lightdark": "#cecece",
      "--between-light-dark": "#f3f3f3"
    };
    setVariables(myVariables2);
  }

  localStorage.setItem("_is_dark_on", _switch.checked);
  edit_link(all_link_nodes);
}



window.onload = () => {
  const _switch = document.querySelector('#dark-mode-switch');
  const orig_url_arr = document.location.href.split("?name=");

  var is_dark = orig_url_arr[1];
  if(is_dark == undefined || is_dark == null) is_dark = false;

  localStorage.setItem("_is_dark_on", is_dark);

  if(is_dark == "true") {
    _switch.click();
  }

  if(_switch.checked ) {
    toggle_dark_mode(true);
  }

  edit_link(all_link_nodes);
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




