// Show the enquiry box after a delay
function showEnquiryBox() {
    const enquiryBox = document.getElementById("enquiryBox");
    enquiryBox.style.display = "block";
}

// Close the enquiry box
function closeEnquiryBox() {
    const enquiryBox = document.getElementById("enquiryBox");
    enquiryBox.style.display = "none";
}

// Delay the appearance of the enquiry box
setTimeout(showEnquiryBox, 10000); // Show after 10 seconds (adjust time as needed)

// Prevent form submission for this demo
document.getElementById("enquiryForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Your enquiry has been submitted!");
});

function validateEnquiryForm(event) {
    event.preventDefault(); // Prevents form submission and page reload

    // Get form field values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validation rules
    if (!name || name.length < 3) {
        alert("Please enter a valid name (minimum 3 characters).");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!phone || !phonePattern.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    if (!message || message.length < 10) {
        alert("Please enter a message (minimum 10 characters).");
        return;
    }

    // If all validations pass
    document.getElementById("successMessage").style.display = "block"; // Show success message
    document.getElementById("enquiryForm").reset(); // Clear the form
}
