window.onload = function () {
    const _switch = document.querySelector('#dark-mode-switch');
    const orig_url_arr = document.location.href.split("?name=");
  
    var is_dark = orig_url_arr[1];
    console.log(is_dark);
    if(is_dark == undefined || is_dark == null) is_dark = false;
  
    localStorage.setItem("_is_dark_on", is_dark);
    
    if(_switch.checked ) {
      toggle_dark_mode(true);
    }
  
    edit_link(all_link_nodes);



    var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {};

    console.log(params[0].split('=')[1]);
    if(params.length >= 2) {
        
        data["img_link"] = params[1].replaceAll("%3A", ":").replaceAll("%2F", "/").replaceAll("%20", "/");
        data["project_name"] = params[0].replaceAll("%20", " ").split("=")[1];
    }
    

    if(params[2] == "true" || params[0].split('=')[1] == "true") {
        _switch.click();
        localStorage.setItem("_is_dark_on", true);
    }

    change_elements(data);
}

const change_elements = (data) => {
    const canvas_img = document.querySelector('#project-image');
    const project_name = document.querySelector('#project-name');

    canvas_img.src = data["img_link"];
    project_name.textContent = data["project_name"];

    if(data["img_link"] == undefined) {
        canvas_img.style.background = "#000";
    }else if(data["img_link"] != undefined) {
        canvas_img.style.background = "transparent";

    }
}

const show_dropdown = () => {
    const dcontent = document.querySelector('.dropdown-content');
    dcontent.classList.toggle('dcontent-show');
}





const edit_link = (link_nodes) => {
    link_nodes.forEach(node =>{
      if(node.id != "edit-btn" && node.classList[0] != "project-item") {
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
  
  
