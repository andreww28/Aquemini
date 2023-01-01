const data = JSON.parse(item_data);

const main = () => {
  insert_project_items();
}

const insert_project_items = () => {
  const mug1_img = data.mug[0]["img-link"];
  const tshirt1_img = '../img/tshirt3.png';
  const shoes1_img = '../img/shoes4.png';
  const slipper1_img = '../img/slippers1.png';

  append_project_items(mug1_img, "My Project(4)");
  append_project_items(tshirt1_img, "My Project (3)");
  append_project_items(shoes1_img, "My Project (2)");
  append_project_items(slipper1_img, "My Project (1)");

  add_link_img();
}


const append_project_items = (img, project_title) => {
  const project_contents = document.querySelector('.project-gallery');
  var documentFragment = document.createRange().createContextualFragment(`
    <div class="project-gallery-item">
      <img src="` + img + `" alt="" id="` + project_title + `">
      <p class="project-filename">` + project_title + `</p>
      <div class="options">
        <button id="edit-btn"><i class="material-icons zoom-in">edit</i></button>
        <button id="del-btn"><i class="material-icons zoom-in">delete</i></button>
      </div>
    </div>`);

  project_contents.prepend(documentFragment);
}

const add_link_img = () => {
  const edit_btns = document.querySelectorAll("#edit-btn");
  var url = null;
  edit_btns.forEach((btn, i) => {
      btn.addEventListener("click", (e) => get_url_parameters(e));
  });
}


const get_url_parameters = (e) => {
  var btn = e.target;

  if(btn.tagName == "I") {
    btn = btn.parentNode;
  }

  var img_node = btn.parentNode.previousElementSibling.previousElementSibling;

  url = '../pages/design.html?name=' + encodeURIComponent(img_node.id) + "&" + encodeURIComponent(img_node.src);
  document.location.href = url;
}
main();
