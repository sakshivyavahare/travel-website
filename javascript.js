document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Code to handle form submission (e.g., sending data to server, displaying a thank you message)
    alert('Thank you for subscribing!');
  });

  document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");
  
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    // Wait for the DOM content to be fully loaded
    var headerContent = document.querySelector('.header-content');
    headerContent.classList.add('show'); // Add the 'show' class to trigger the animation
  });
  