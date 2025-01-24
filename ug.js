function validateForm() {
    const phone = document.getElementById('phone').value;
    const alternatePhone = document.getElementById('alternatePhone').value;
  
    if (phone === alternatePhone) {
      alert('Primary and alternate phone numbers should not be the same.');
      return false;
    }
  
    const declaration = document.getElementById('declaration');
    if (!declaration.checked) {
      alert('You must accept the declaration to proceed.');
      return false;
    }
  
    return true;
  }
  