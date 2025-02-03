// script.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from actually submitting

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Basic client-side validation (replace with proper validation)
    if (username === '' || password === '') {
        errorMessage.textContent = "Username and password are required.";
        return;
    }

    // In a real application, you would send the data to a server for authentication.
    // This is a simplified example:
    if (username === 'testuser' && password === 'password') {
        // Redirect or perform actions upon successful login
        alert('Login Successful!'); // Replace with your desired action
        window.location.href = "welcome.html"; // Example redirect
    } else {
        errorMessage.textContent = "Invalid username or password.";
    }
});


// Dynamically create more cubes for the background animation (optional):
const background = document.querySelector('.background-animation');
for (let i = 0; i < 100; i++) { // Create 100 cubes
    const cube = document.createElement('div');
    cube.classList.add('cube');
    // Randomize cube positions and animation delays
    cube.style.top = `${Math.random() * 100}%`;
    cube.style.left = `${Math.random() * 100}%`;
    cube.style.animationDelay = `${Math.random() * 2}s`;
    background.appendChild(cube);
}