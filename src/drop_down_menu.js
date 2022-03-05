const button = document.querySelector(".drop-down-element-click");
const options = document.querySelector(".drop-down-options");
console.log(options);
button.addEventListener("click", callback_listener);

function callback_listener() {
    if (options.style.display == "block") {
        options.style.display = "none";  
    } else if (options.style.display == "none") {
        options.style.display = "block";  
    }  else {
        options.style.display = "block";  
    }
}