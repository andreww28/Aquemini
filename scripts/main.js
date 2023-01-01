
const left_menu = (e) => {
  console.log(e.target.checked);
}

const toggle_nav = () => {
  const header = document.querySelector("header");
  header.classList.toggle("active");
}

const toggle_desktop_nav = (e) => {
  console.log(e);
  var text = e.textContent;
  const header = document.querySelector("header");
  header.classList.toggle("active-desktop");
}
