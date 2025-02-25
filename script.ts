// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (email && password) {
        alert(`Login successful for: ${email}`);
    } else {
        alert('Please fill in all fields.');
    }
});

// Handle registration form submission
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    if (name && email && password) {
        alert(`Registration successful for: ${name}`);
    } else {
        alert('Please fill in all fields.');
    }
});
