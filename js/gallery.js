// Select elements
const images = document.querySelectorAll('.grid-item img');
const viewer = document.getElementById('viewer');
const fullImg = document.getElementById('full-image');
const closeBtn = document.querySelector('.close-btn');
const downloadBtns = document.querySelectorAll('.download-btn');

// 1. Open viewer when the image is clicked
images.forEach(img => {
    img.addEventListener('click', () => {
        viewer.style.display = 'flex';
        fullImg.src = img.src; // Set the viewer image to the one clicked
    });
});

// 2. Prevent viewer from opening when the Download Button is clicked
downloadBtns.forEach(btn => {
    btn.addEventListener('click', (event) => {
        // This is the "magic" line that stops the click from 
        // bubbling up to the image/grid-item
        event.stopPropagation(); 
    });
});

// 3. Close viewer when clicking 'X' or the dark background
[closeBtn, viewer].forEach(element => {
    if(element) { // Safety check
        element.addEventListener('click', () => {
            viewer.style.display = 'none';
        });
    }
});

// 4. Optional: Close viewer with the 'Escape' key for a better user experience
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        viewer.style.display = 'none';
    }
});