document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    let isValid = true;
  
    // Name Validation
    const name = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    if (name.value.trim() === '') {
      nameError.textContent = 'Name is required.';
      nameError.style.display = 'block';
      isValid = false;
    } else {
      nameError.style.display = 'none';
    }
  
    // Email Validation
    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      emailError.textContent = 'Please enter a valid email address.';
      emailError.style.display = 'block';
      isValid = false;
    } else {
      emailError.style.display = 'none';
    }
  
    // Message Validation
    const message = document.getElementById('message');
    const messageError = document.getElementById('messageError');
    if (message.value.trim() === '') {
      messageError.textContent = 'Message cannot be empty.';
      messageError.style.display = 'block';
      isValid = false;
    } else {
      messageError.style.display = 'none';
    }
  
    // If all fields are valid, submit the form
    if (isValid) {
      alert('Form submitted successfully!');
      // Here, you can add code to submit the form data via AJAX or to a server.
      document.getElementById('contactForm').reset();
    }
  });
  