const imagesPanel = document.querySelectorAll(".img-panel");
const arrowForward = document.getElementById("btn-forward");
const arrowBack = document.getElementById("btn-back");
let imageActual = 0;
let time = 4000;
let currentImageIndex = 0;
let maxImages = imagesPanel.length;

function hideImage() {
  imagesPanel.forEach((img) => {
    img.classList.remove("show");
  });
}

function showImage() {
  imagesPanel[imageActual].classList.add("show");
}

function btnForwardShow() {
  document.getElementById("btn-forward").style.opacity = 1;
}

function btnBackShow() {
  document.getElementById("btn-back").style.opacity = 1;
}

function nextImage() {
  imagesPanel[currentImageIndex].classList.remove("show");
  currentImageIndex++;
  if (currentImageIndex >= maxImages) {
    currentImageIndex = 0;
  }
  imagesPanel[currentImageIndex].classList.add("show");
}

function start() {
  setInterval(() => {
    nextImage();
  }, time);
}

window.addEventListener("load", start);

arrowForward.addEventListener("click", function () {
  const totalImages = imagesPanel.length - 1;
  if (imageActual === totalImages) {
    currentImageIndex = 0;
    document.getElementById("btn-forward").style.opacity = 0.2;
    btnBackShow();
    return;
  }

  btnForwardShow();
  btnBackShow();

  imageActual++;
  time++;

  hideImage();
  showImage();
});

arrowBack.addEventListener("click", function () {
  if (imageActual === 0) {
    btnForwardShow();
    document.getElementById("btn-back").style.opacity = 0.2;
    return currentImageIndex[2];
  }

  btnForwardShow();
  btnBackShow();

  imageActual--;
  time++;

  hideImage();
  showImage();
});
