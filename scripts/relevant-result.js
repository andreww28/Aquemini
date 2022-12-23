const item_d = JSON.parse(item_data);

window.onload = function () {
    var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];
    }

    var item_chosen = data.name;
    var items = item_d[item_chosen];
    update_result_imgs(items);
}


const update_result_imgs = (items) => {
  document.querySelector("#chosen-item-img").src = items[0]["img-link"];

  items.forEach((item, i) => {
    append_result_items_child(item["img-link"], item["product-name"], item["product-link"]);
  });
}


const append_result_items_child = (img, name, link) => {
  const result_items = document.querySelector('.result-items');
  var documentFragment = document.createRange().createContextualFragment(`
    <div class="result-item">
      <img src="` + img + `">
      <p class="result-item-name">` + name + `</p>
      <a href="` + link + `" target="_blank">Item link</a>
    </div>`);

  result_items.appendChild(documentFragment);
}
