document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const images = document.querySelectorAll('.slider img');
    let currentIndex = 0;
    const totalImages = images.length;
    const defaultTransition = 'transform 1s ease-in-out';  // Normal speed
    const slowTransition = 'transform 2s ease-in-out';     // Slow speed for reset

    // Function to slide the images
    function slideImages() {
        currentIndex++;

        // If we reached the end, reset to the first image with a slow transition
        if (currentIndex === totalImages) {
            slider.style.transition = slowTransition;  // Slow transition
            currentIndex = 0;  // Reset index to the first image
        } else {
            slider.style.transition = defaultTransition;  // Normal transition
        }

        const slideWidth = images[0].clientWidth; // Get the width of an image
        slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`; // Slide the images
    }

    // Automatically slide every 3 seconds
    setInterval(slideImages, 3000);

    // Ensure the slider works properly on window resize
    window.addEventListener('resize', function() {
        const slideWidth = images[0].clientWidth; 
        slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`; // Adjust the position
    });
});

// Event delegation for buy and remove buttons
$(document).on('click', '.buy', function() {
    $(this).closest('.bottom').addClass("clicked");
});

$(document).on('click', '.remove', function() {
    $(this).closest('.bottom').removeClass("clicked");
});

// Data arrays to dynamically change content
const imagesArray = [
    '/img/img_camera.jpg',
    '/img/img_headphones2.jpg',
    '/img/img_pc.jpg',
    '/img/img_keyboard.jpg',
    '/img/img_headphones.jpg',
    '/img/img_watch.jpg',
    '/img/img_glasses.jpg',
    '/img/img_bioglow.jpg',
    '/img/img_watch2.jpg',
    '/img/img-shoes.jpg',
    '/img/img_sac.jpg',
    '/img/img_string.jpg',
    '/img/img_bycicle.jpg',
    '/img/img-shoes2.jpg',
    '/img/img_dress.jpg',
];

const titles = ['Camera', 'Sonny', 'PC', 'Keyboard', 'Oraimo', 'Watch', 'Pird', 'Bioglow', 'Rolex', 'Shoes', 'Sac', 'String', 'Bicycle', 'Air Force', 'Dress'];
const prices = ['£320', '£659', '£1000', '£300', '£399'];

// Function to modify a cloned card
function modifyCard(clonedCard, index) {
    clonedCard.querySelector('.top').style.backgroundImage = `url(${imagesArray[index]})`;
    clonedCard.querySelector('.card-title').textContent = titles[index];
    clonedCard.querySelector('.titele_inside').textContent = titles[index];
    clonedCard.querySelector('.card-price').textContent = prices[index % prices.length];
}

// Function to clone cards
function changeCards(count) {
    const wrapper = document.querySelector(".cards");
    const container = document.querySelector(".wrapper");
    const fragment = document.createDocumentFragment();  // Create a DocumentFragment

    for (let i = 0; i < count; i++) {
        if (i >= imagesArray.length || i >= titles.length) break; // Prevent accessing out of bounds

        const clonedContainer = container.cloneNode(true); // Clone the card structure
        modifyCard(clonedContainer, i); // Modify the cloned card
        fragment.appendChild(clonedContainer); // Append each card to the fragment
    }

    wrapper.appendChild(fragment); // Append all cards at once to the DOM
}

// Call the function to clone and modify 15 cards
changeCards(15);


document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const images = document.querySelectorAll('.slider img');
    let currentIndex = 0;
    const totalImages = images.length;
    const defaultTransition = 'transform 1s ease-in-out';  // Normal speed
    const slowTransition = 'transform 2s ease-in-out';     // Slow speed for reset

    // Function to slide the images
    function slideImages() {
        currentIndex++;
        if (currentIndex === totalImages) {
            slider.style.transition = slowTransition;  // Slow transition
            currentIndex = 0;  // Reset index to the first image
        } else {
            slider.style.transition = defaultTransition;  // Normal transition
        }
        const slideWidth = images[0].clientWidth; // Get the width of an image
        slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`; // Slide the images
    }

    // Automatically slide every 3 seconds
    setInterval(slideImages, 3000);
    window.addEventListener('resize', function() {
        const slideWidth = images[0].clientWidth; 
        slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`; // Adjust the position
    });
});

// Initialize basket
let basketCount = 0;

// Update basket count display
function updateBasketCount() {
    const counter = document.getElementById('basket-counter');
    counter.textContent = basketCount; // Update counter display

    // Show or hide the counter
    if (basketCount > 0) {
        counter.style.display = 'inline'; // Show the counter
    } else {
        counter.style.display = 'none'; // Hide the counter
    }
}

// Event delegation for buy and remove buttons
$(document).on('click', '.buy', function() {
    const item = $(this).data("item");
    basketCount += 1; // Increment basket count
    updateBasketCount(); // Update the counter display
    $(this).closest('.bottom').addClass("clicked"); // Add clicked class for styling
});

$(document).on('click', '.remove', function() {
    const item = $(this).data("item");
    if (basketCount > 0) {
        basketCount -= 1; // Decrement basket count
    }
    updateBasketCount(); // Update the counter display
    $(this).closest('.bottom').removeClass("clicked"); // Remove clicked class for styling
});


