const imageContainer = document.getElementById("image-container");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
let currentIndex = 0;
const srcArray = [
  "images/img1.jpg",
  "images/img2.jpeg",
  "images/img3.jpeg",
  "images/img4.jpg",
  "images/img5.jpeg",
  "images/img6.jpeg",
  "images/img7.jpeg",
  "images/img8.jpeg",
  "images/img9.avif",
];

function showCurrentImage() {
  imageContainer.innerHTML = "";

  const img = document.createElement("img");
  img.src = srcArray[currentIndex];
  img.alt = "Photo " + (currentIndex + 1);

  imageContainer.appendChild(img);
}

function imgNext() {
  currentIndex++;
  if (currentIndex >= srcArray.length) {
    currentIndex = 0;
  }
  showCurrentImage();
}

function imgPrev() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = srcArray.length - 1;
  }
  showCurrentImage();
}

prevButton.addEventListener("click", imgPrev);
nextButton.addEventListener("click", imgNext);

showCurrentImage();
