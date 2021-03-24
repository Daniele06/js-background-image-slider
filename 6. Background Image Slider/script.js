// Array with images
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

// Image array starting value
let i = -1;

// Variable targeting the p element showing the current image number
var currentImage = document.getElementById("currentImg");

// Starts the script so there is no need to press buttons twice
window.onload = sliderForward, sliderBackwards;

// Onclicks for the forward, backward, and submit buttons
document.getElementById("buttonForward").onclick = sliderForward;
document.getElementById("buttonBack").onclick = sliderBackwards;
document.getElementById("submitButt").onclick = submitImage;

// Function for the forward button
function sliderForward() {
    // Increments if it didn't reach the maximum value of the variable
    if (i < (images.length - 1)) {
        i++;
    }

    // When it reached last image, goes back to the first one
    else {
        i = 0;
    }

    // Puts the current number of the image in the HTML image source
    document.getElementById("img-box").src = images[i];

    // Displays the number using the variable defined earlier and our value
    currentImage.innerHTML = "Image number" + " " + i;
}

// Function for the backward button
function sliderBackwards() {
    // Goes back in the images until it reaches the first one
    if (i >= 1) {
        i--;
    }

    // Then go back to the last image
    else {
        i = (images.length - 1);
    }

    // Pastes the current image into the HTML image source
    document.getElementById("img-box").src = images[i];

    // Shows the number of the current image
    currentImage.innerHTML = "Image number" + " " + i;
}

// Submit/add button = this button adds the link of a image to the array
function submitImage() {
    // Puts the value of the text field in the submit variable
    var submit = document.getElementById("urlField").value;

    // Pushes that variable value to the images array
    images.push(submit);

    // Resets the field
    document.getElementById("urlField").value = "";
}