const main = () => {
  document.querySelector(".option #desc").click();
  document.querySelector('.desc-content').style.display = 'flex';
  document.querySelector('.img-content').style.display = 'none';
}


const radio_show_content = (e) => {
  if(e.value == "image") {
    console.log(document.querySelector('.desc-content'));
    document.querySelector('.desc-content').style.display = 'none';
    document.querySelector('.img-content').style.display = 'flex';
  }else if(e.value == "desc") {
    document.querySelector('.desc-content').style.display = 'flex';
    document.querySelector('.img-content').style.display = 'none';
  }
}

main();
