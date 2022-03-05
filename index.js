const container = document.querySelector("div");
container.addEventListener("click", callback_listener);

function callback_listener(e) {
    if (e.target.className == "menu-drop-down") {
        location.href = "src/drop_down_menu.html";  

    } else if (e.target.className == "menu-image-slider") {
        location.href = "src/image_slider.html";  

    } else if (e.target.className == "menu-mobile-1") {
        location.href = "src/mobile_menu.html";  
    }
}    

