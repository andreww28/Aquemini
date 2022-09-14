const data = JSON.parse(item_data);
const main = () => {
  document.querySelector(".option #desc").click();
  document.querySelector('.desc-content').style.display = 'flex';
  document.querySelector('.img-content').style.display = 'none';


  insert_project_search();
}


const radio_show_content = (e) => {
  if(e.value == "image") {
    document.querySelector('.desc-content').style.display = 'none';
    document.querySelector('.img-content').style.display = 'flex';
  }else if(e.value == "desc") {
    document.querySelector('.desc-content').style.display = 'flex';
    document.querySelector('.img-content').style.display = 'none';
  }
}


const insert_project_search = () => {
  const mug1_img = data.mug[0]["img-link"];
  const tshirt1_img = data.shirt[0]["img-link"];
  const shoes1_img = data.shoes[0]["img-link"];
  const slipper1_img = data.slippers[0]["img-link"];

  append_projecs_search_child(mug1_img, "mug");
  append_projecs_search_child(tshirt1_img, "shirt");
  append_projecs_search_child(shoes1_img, "shoes");
  append_projecs_search_child(slipper1_img, "slippers");

  add_link_img();
}


const append_projecs_search_child = (img, obj_type) => {
  const project_contents = document.querySelector('.project-contents');
  var documentFragment = document.createRange().createContextualFragment(`
  <div class="project-item .search-project-item">
    <img src="` + img + `" id="` + obj_type + `">
  </div>`);

  project_contents.prepend(documentFragment);
}

const add_link_img = () => {
  const project_content_items = document.querySelectorAll('.project-item');
  var url = null;
  project_content_items.forEach((item, i) => {
      item.addEventListener("click", (e) => {
        url = '../pages/search-result.html?name=' + encodeURIComponent(e.target.id) + "&" + encodeURIComponent(localStorage["_is_dark_on"]);
        document.location.href = url;
      });
  });

}

main();
