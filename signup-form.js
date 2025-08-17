const mainForm = document.querySelector('.sign-up-form');
const createAccountButton = document.getElementById('btn-create-account');
const password_input = document.getElementById('password');
const confirm_password_input = document.getElementById('confirm-password');

createAccountButton.addEventListener('click', (event) => {
    event.preventDefault();

    // Reset all invalid borders first
    const requiredInputs = mainForm.querySelectorAll('[required]');
    requiredInputs.forEach(input => {
        input.classList.remove('input-invalid');
    });

    // First, check if the passwords match
    if (password_input.value !== confirm_password_input.value) {
        alert("Passwords do not match!");
        password_input.classList.add('input-invalid');
        confirm_password_input.classList.add('input-invalid');
        return; // Stop the function here
    } else {
        // Passwords match, so remove any invalid styling
        password_input.classList.remove('input-invalid');
        confirm_password_input.classList.remove('input-invalid');
    }

    // Now, use the built-in browser API to check all other form validity constraints
    if (mainForm.reportValidity()) {
        // If the form is valid (all required fields are filled), submit the form
        mainForm.submit();
    } else {
        // If the form is not valid, add the 'input-invalid' class to all required fields that are not valid
        requiredInputs.forEach(input => {
            if (!input.checkValidity()) {
                input.classList.add('input-invalid');
            }
        });
    }
});