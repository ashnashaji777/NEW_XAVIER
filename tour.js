// Add event listeners for grid items
const gridItems = document.querySelectorAll(".grid-item img");
const lightbox = document.createElement("div");
lightbox.classList.add("image-lightbox");
document.body.appendChild(lightbox);

const lightboxImage = document.createElement("img");
lightbox.appendChild(lightboxImage);

const closeButton = document.createElement("span");
closeButton.classList.add("lightbox-close");
closeButton.innerHTML = "&times;";
lightbox.appendChild(closeButton);

// Open lightbox on image click
gridItems.forEach((item) => {
    item.addEventListener("click", () => {
        lightboxImage.src = item.src;
        lightbox.style.display = "flex";
    });
});

// Close lightbox on close button click
closeButton.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// Close lightbox on background click
lightbox.addEventListener("click", (e) => {
    if (e.target !== lightboxImage && e.target !== closeButton) {
        lightbox.style.display = "none";
    }
});
