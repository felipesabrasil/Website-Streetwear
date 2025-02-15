let currentImageIndex = 0;
const images = ["image/bone.png", "image/camisa-streetwear.png"];

function changeImage(direction) {
  const imageElement = document.getElementById("product-image");
  imageElement.classList.add("fade-out");

  setTimeout(() => {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
      currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
      currentImageIndex = 0;
    }
    imageElement.src = images[currentImageIndex];
    imageElement.classList.remove("fade-out");
  }, 500); // Tempo da transição deve coincidir com o tempo da transição CSS
}