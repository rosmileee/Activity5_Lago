document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetSection = document.querySelector(this.getAttribute('href'));
      
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
    });
  });
  
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
    
  form.addEventListener('submit', function(e) {
    e.preventDefault();
      
    const emailInput = document.querySelector('#email');
    const messageInput = document.querySelector('#message');
      
    if (!isValidEmail(emailInput.value)) {
      alert('Please enter a valid email address.');
      return;
    }
      
    if (messageInput.value.trim() === '') {
      alert('Please enter a message.');
      return;
    }
      
    alert('Form submitted successfully!');
    form.reset();
  });
    
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});