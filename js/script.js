$(document).ready(function() {
    // Smooth Scrolling for Navigation
    $("a[href^='#']").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function() {
          window.location.hash = hash;
        });
      }
    });
  
    // Simple Image Carousel 
    let currentSlide = 0;
    const slides = $('.carousel-item');
    const totalSlides = slides.length;
  
    function showSlide(n) {
      n = (n + totalSlides) % totalSlides;
      slides.removeClass('active');
      slides.eq(n).addClass('active');
      currentSlide = n;
    }
  
    $('.carousel-control-prev').click(function() {
      showSlide(currentSlide - 1);
    });
  
    $('.carousel-control-next').click(function() {
      showSlide(currentSlide + 1);
    });
  
    // Initial display
    showSlide(currentSlide);
  
    // 1. Implementing Modals (using Bootstrap Modals)
    $('#openModalButton').click(function() { 
      $('#exampleModal').modal('show'); 
    });
  
    // 2. More advanced carousel (using Slick)
    $('.your-carousel-class').slick({
      // ... (Slick carousel options) ...
    });
  
    // 3. Animations on scroll (using AOS)
    AOS.init({
      // ... (AOS initialization options) ...
    });
  
    // 4. AJAX for dynamic content loading 
    $('#loadContentButton').click(function(event) {
      event.preventDefault(); 
  
      $.ajax({
        // ... (AJAX settings) ...
      });
    }); 
  });
  // ... (your other JavaScript code) ...

// AJAX for dynamic carousel content
$.ajax({
    url: '/api/news', 
    type: 'GET', 
    dataType: 'json', 
    success: function(articles) {
        // Process the 'articles' data (array of news articles) from the backend
        // and dynamically create carousel items using jQuery.
        // Example:
        // let carouselHTML = '';
        // articles.forEach(article => {
        //    carouselHTML += `<div class="carousel-item">...</div>`; // Create carousel items
        // });
        // $('.your-carousel-class').html(carouselHTML);
        // $('.your-carousel-class').slick(); // Reinitialize Slick 
    },
    error: function() {
        console.log("Error loading news articles.");
    }
});