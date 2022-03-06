// var slideIndex = 3;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("image-container");
//     var dots = document.getElementsByClassName("points");
//     if (n > slides.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "block";
//     dots[slideIndex-1].className += " active";
//   } 

// const images = document.querySelectorAll(".image-container");  
// const points = document.querySelectorAll(".points");  
// console.log(images);
// console.log(points); 

// console.log("XXXXXXXXXXXXXXXXXXXXXXXXX"); 

// console.log(images[0]);




let imageID = 1; 
showImage(imageID);

function moveImage(dir) {
    const images = document.querySelectorAll(".image-container");  
    let direction = dir;
    
    if (dir == 1){
        imageID = imageID + 1;
    } else {
        imageID = imageID - 1;
    }

    if (imageID > images.length) {
        imageID= 1;
    }
    if (imageID < 1) {
        imageID = images.length;
    }
    
    showImage(imageID);
    console.log(imageID);

}

function showImage(id_slide) {
    const images = document.querySelectorAll(".image-container");  
    const points = document.querySelectorAll(".points");  
    let id = id_slide-1;

    for (i=0; i<images.length; i++) {
        if(i==id){
            images[i].style.display = "block";
        } else {
            images[i].style.display = "none";
        }
    }

    for (i=0; i<images.length; i++) {
        if(i==id){
            points[i].classList.add("selected");
            points[i].classList.remove("not-selected");
        } else {
            points[i].classList.add("not-selected");
            points[i].classList.remove("selected");
        }
    }
}






