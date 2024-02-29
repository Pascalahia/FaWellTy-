// Toggle visibility of sign up form
document.getElementById('getStartedBtn').addEventListener('click', function() {
    document.getElementById('signupForm').classList.toggle('hidden');
});

// Handle form submission for sign up
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    // Get form values
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    // Here you can perform further validation and send the data to your backend for account creation
    // For demonstration purposes, let's just log the values
    console.log("Username: " + username + ", Email: " + email + ", Password: " + password);
    // Clear the form fields
    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
});
