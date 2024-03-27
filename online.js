document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        // Here you can add code to validate the email and password
        // and perform login authentication
        console.log('Email:', email);
        console.log('Password:', password);
        // For now, let's just log the email and password
    });
});
