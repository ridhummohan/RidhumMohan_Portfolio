// JavaScript for Carousel Functionality

// Select elements
const track = document.querySelector('.carousel-track');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
const items = Array.from(track.children);

// Get the width of a single carousel item
const itemWidth = items[0].getBoundingClientRect().width;

// Arrange items side by side
items.forEach((item, index) => {
    item.style.left = `${itemWidth * index}px`;
});

// Current slide index
let currentIndex = 0;

// Move to a specific slide
function moveToSlide(track, currentIndex) {
    const amountToMove = -itemWidth * currentIndex; // Negative for left movement
    track.style.transform = `translateX(${amountToMove}px)`;
}

// Event listener for Next button
nextButton.addEventListener('click', () => {
    if (currentIndex < items.length - 1) {
        currentIndex++;
        moveToSlide(track, currentIndex);
    }
});

// Event listener for Previous button
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        moveToSlide(track, currentIndex);
    }
});

// JavaScript for Form Functionality

// Handle "What are your needs?" button selection
const needButtons = document.querySelectorAll('.need-button');
let selectedNeed = '';

needButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active state from all buttons
        needButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active state to clicked button
        button.classList.add('active');
        
        // Save selected need
        selectedNeed = button.dataset.need; 
        console.log(`Selected Need: ${selectedNeed}`);
    });
});

// Handle form submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page reload
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill out all required fields.');
        return; // Stop submission if fields are missing
    }

    
alert(`Form Submitted Successfully!\n\nName:${name}\nEmail:${email}\nPhone:${phone}\nNeed:${selectedNeed}\nMessage:${message}`);
});
