const track = document.querySelector('.slider-track');
const cards = document.querySelectorAll('.card');
const cardWidth = cards[0].offsetWidth + 20; // Card width including margin
const visibleCards = Math.floor(document.querySelector('.slider-container').offsetWidth / cardWidth);

function moveSlide(direction) {
    const maxIndex = cards.length - visibleCards; // Maximum index to slide
    
    // Calculate new index
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = 0; // Prevent sliding before the first card
    } else if (currentIndex > maxIndex) {
        currentIndex = maxIndex; // Prevent sliding beyond the last visible cards
    }
    
    // Move the slider track
    const offset = -currentIndex * cardWidth;
    track.style.transform = `translateX(${offset}px)`;
}

const items = document.querySelectorAll('.item-inner');
    items.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('flipped');
        });
    });

    
    window.onscroll = function() {
        var header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.backgroundColor = "#000"; // Darken the navbar when scrolling
        } else {
            header.style.backgroundColor = " #000"; // Reset background color
            
        }
    };

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

    searchForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent page reload

        const searchTerm = searchInput.value.trim();

        if (searchTerm !== "") {
            // Here you would add your search logic
            // For example, you could:
            // 1. Send an AJAX request to a server-side script 
            // 2. Filter your product list on the client-side
            // 3. Redirect to a search results page

            console.log("Search Term:", searchTerm); // Temporary log
        } else {
            alert("Please enter a search term.");
        }
    });


 // Initialize Swiper
 const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // Responsive breakpoints
    breakpoints: {
      0: {
          slidesPerView: 1
      },
      768: {
          slidesPerView: 2
      },
      1024: {
          slidesPerView: 3
      },
  }
  });