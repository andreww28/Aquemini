window.onload = function () {
    var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {};

    data["img_link"] = params[1].replaceAll("%3A", ":").replaceAll("%2F", "/").replaceAll("%20", "/");
    data["project_name"] = params[0].replaceAll("%20", " ").split("=")[1];

    change_elements(data);
}

const change_elements = (data) => {
    const canvas_img = document.querySelector('#project-image');
    const project_name = document.querySelector('#project-name');

    canvas_img.src = data["img_link"];
    project_name.textContent = data["project_name"];
}

const show_dropdown = () => {
    const dcontent = document.querySelector('.dropdown-content');
    dcontent.classList.toggle('dcontent-show');
}