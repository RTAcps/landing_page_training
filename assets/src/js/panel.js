const imagesPanel = document.querySelectorAll(".img-panel");
const arrowForward = document.getElementById("btn-forward");
const arrowBack = document.getElementById("btn-back");
let imageActual = 0;

function hideImage() {
  imagesPanel.forEach((img) => {
    img.classList.remove("show");
  });
}

function showImage() {
  imagesPanel[imageActual].classList.add("show");
}

arrowForward.addEventListener("click", function () {
  const totalImages = imagesPanel.length - 1;
  if (imageActual !== totalImages) {
    imageActual++;
    arrowBack.classList.remove("disabled");
  }

  hideImage();

  showImage();

  if (imageActual === totalImages) {
    arrowForward.classList.add("disabled");
  }
});

arrowBack.addEventListener("click", function () {
  if (imageActual !== 0) {
    imageActual--;
    arrowForward.classList.remove("disabled");
  }

  hideImage();

  showImage();

  if (imageActual === 0) {
    arrowBack.classList.add("disabled");
  }
});
