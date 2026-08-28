// Grab the form element
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent page refresh

    // Get input values
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Simple validation
    if(username === "" || password === "") {
        alert("Please fill in all fields!");
        return;
    }

    // Fake login logic (for demo purposes)
    if(username === "testuser" && password === "password123") {
        alert("Login successful!");
    } else {
        alert("Invalid username or password.");
    }

    // Clear the form
    loginForm.reset();
});