// Gallery Image Slider
let currentImageIndex = 0;
const galleryImages = document.querySelectorAll('.gallery-images img');
const totalImages = galleryImages.length;

function showImage(index) {
    galleryImages.forEach(img => img.style.display = 'none');
    galleryImages[index].style.display = 'block';
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    showImage(currentImageIndex);
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    showImage(currentImageIndex);
}

// Contact Form Validation
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    if (validateForm()) {
        alert('Form submitted successfully!');
        contactForm.reset();
    }
});

function validateForm() {
    let isValid = true;

    if (nameInput.value.trim() === '') {
        isValid = false;
        showError(nameInput, 'Name is required');
    } else {
        showSuccess(nameInput);
    }

    if (emailInput.value.trim() === '') {
        isValid = false;
        showError(emailInput, 'Email is required');
    } else if (!isValidEmail(emailInput.value.trim())) {
        isValid = false;
        showError(emailInput, 'Please enter a valid email address');
    } else {
        showSuccess(emailInput);
    }

    if (messageInput.value.trim() === '') {
        isValid = false;
        showError(messageInput, 'Message is required');
    } else {
        showSuccess(messageInput);
    }

    return isValid;
}

function showError(input, message) {
    const formGroup = input.parentElement;
    formGroup.className = 'form-group error';
    const errorMessage = formGroup.querySelector('small');
    errorMessage.textContent = message;
}

function showSuccess(input) {
    const formGroup = input.parentElement;
    formGroup.className = 'form-group success';
}

function isValidEmail(email) {
    // Regex for basic email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Initialize gallery with the first image
showImage(currentImageIndex);

// Event listeners for gallery navigation
document.getElementById('nextBtn').addEventListener('click', nextImage);
document.getElementById('prevBtn').addEventListener('click', prevImage);
