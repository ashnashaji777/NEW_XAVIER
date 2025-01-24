// JavaScript for Modal Functionality
const galleryItems = document.querySelectorAll('.gallery-item img');
const modal = document.getElementById('gallery-modal');
const modalImage = document.getElementById('modal-image');
const close = document.querySelector('.close');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let currentIndex = 0;

// Open modal
galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImage.src = item.src;
        currentIndex = index;
    });
});

// Close modal
close.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Show previous image
prev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    modalImage.src = galleryItems[currentIndex].src;
});

// Show next image
next.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    modalImage.src = galleryItems[currentIndex].src;
});

// Close modal on outside click
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
