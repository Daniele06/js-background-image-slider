var images = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg",
    "images/7.jpg",
    "images/8.jpg",
];

let i = -1;

var currentImage = document.getElementById("currentImg");

window.onload = sliderForward, sliderBackwards;

document.getElementById("buttonForward").onclick = sliderForward;
document.getElementById("buttonBack").onclick = sliderBackwards;
document.getElementById("submitButt").onclick = submitImage;

function sliderForward() {
    if (i < (images.length - 1)) {
        i++;
    } else {
        i = 0;
    }

    document.getElementById("img-box").src = images[i];
    currentImage.innerHTML = "Image number" + " " + i;
}

function sliderBackwards() {
    if (i >= 1) {
        i--;
    } else {
        i = (images.length - 1);
    }

    document.getElementById("img-box").src = images[i];
    currentImage.innerHTML = "Image number" + " " + i;
}

function submitImage() {
    var submit = document.getElementById("urlField").value;
    images.push(submit);
    document.getElementById("urlField").value = "";
}